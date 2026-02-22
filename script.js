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