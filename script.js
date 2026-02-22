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

/* SetActive tab */
function setActiveTab(activeButton) {

  const tabButtons = [allTab, interviewTab, rejectedTab];

  for (const btn of tabButtons) {
    btn.classList.remove("bg-[#3B82F6]");
    btn.classList.remove("text-white");
    btn.classList.add("bg-gray-200");
    btn.classList.add("text-gray-700");
  }

  activeButton.classList.remove("bg-gray-200");
  activeButton.classList.remove("text-gray-700");
  activeButton.classList.add("bg-[#3B82F6]");
  activeButton.classList.add("text-white");
}


/* Card Count */
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

