/* All Elements Select */
const allTab = document.getElementById("all-tab");
const interviewTab = document.getElementById("interview-tab");
const rejectedTab = document.getElementById("rejected-tab");

const cardContainer = document.getElementById("card-container");

const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");

const jobsCountText = document.getElementById("jobs-count");
const noJobs = document.getElementById("No-Jobs");

let interviewJobs = [];
let rejectedJobs = [];


/* SetActive Tab */
function setActiveTab(activeButton) {

  const tabButtons = [allTab, interviewTab, rejectedTab];

  for (const btn of tabButtons) {
    btn.classList.remove("bg-[#3B82F6]", "text-white");
    btn.classList.add("bg-gray-200", "text-gray-700");
  }

  activeButton.classList.remove("bg-gray-200", "text-gray-700");
  activeButton.classList.add("bg-[#3B82F6]", "text-white");
}


/* VisibleCard Count */
function visibleCards() {

  let count = 0;
  const cards = cardContainer.children;

  for (const card of cards) {
    if (card.style.display !== "none") {
      count++;
    }
  }

  return count;
}


/* Dashboard Update */
function updateDashboard() {

  interviewCount.innerText = interviewJobs.length;
  rejectedCount.innerText = rejectedJobs.length;
  const totalCards = cardContainer.children.length;
  totalCount.innerText = totalCards;
  jobsCountText.innerText = visibleCards() + " of " + totalCards + " jobs";
}


/* All Tab */
allTab.addEventListener("click", function () {

  setActiveTab(allTab);
  const cards = cardContainer.children;

  for (const card of cards) {
    card.style.display = "block";
  }

  noJobs.classList.add("hidden");
  updateDashboard();
});


/* Interview Tab */
interviewTab.addEventListener("click", function () {

  setActiveTab(interviewTab);
  const cards = cardContainer.children;
  for (const card of cards) {
    if (interviewJobs.includes(card)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }

  if (interviewJobs.length === 0) {
    noJobs.classList.remove("hidden");
  } else {
    noJobs.classList.add("hidden");
  }

  updateDashboard();
});


/* Rejected Tab */
rejectedTab.addEventListener("click", function () {

  setActiveTab(rejectedTab);
  const cards = cardContainer.children;
  for (const card of cards) {
    if (rejectedJobs.includes(card)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }

  if (rejectedJobs.length === 0) {
    noJobs.classList.remove("hidden");
  } else {
    noJobs.classList.add("hidden");
  }

  updateDashboard();
});


/* Interview, Rejected, Delete Function */
function setupCardButtons() {

  const cards = cardContainer.children;
  for (const card of cards) {
    const actionButtons = card.querySelectorAll(".flex button");
    const interviewButton = actionButtons[0];
    const rejectedButton = actionButtons[1];
    const statusBadge = card.querySelector("span");
    const deleteButton = card.querySelector(".fa-trash-can").parentElement;


    /* Interview btn */
    interviewButton.addEventListener("click", function () {

      if (!interviewJobs.includes(card)) {
        interviewJobs.push(card);
      }

      rejectedJobs = rejectedJobs.filter(function (item) {
        return item !== card;
      });

      statusBadge.innerText = "INTERVIEW";
      statusBadge.className =
        "inline-block mt-3 px-3 py-2 text-xs font-semibold bg-green-200 text-green-800 rounded-md";

      updateDashboard();
    });


    /* Rejected Button */
    rejectedButton.addEventListener("click", function () {

      if (!rejectedJobs.includes(card)) {
        rejectedJobs.push(card);
      }

      interviewJobs = interviewJobs.filter(function (item) {
        return item !== card;
      });

      statusBadge.innerText = "REJECTED";
      statusBadge.className =
        "inline-block mt-3 px-3 py-2 text-xs font-semibold bg-red-200 text-red-800 rounded-md";

      updateDashboard();
    });


    /* Delete Button */
    deleteButton.addEventListener("click", function () {

      interviewJobs = interviewJobs.filter(function (item) {
        return item !== card;
      });

      rejectedJobs = rejectedJobs.filter(function (item) {
        return item !== card;
      });

      card.remove();
      updateDashboard();
    });

  }
}

setupCardButtons();
updateDashboard();