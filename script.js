// variables
let story1Images = ["busy.png", "empty.png", "priority.png"];
let story1Captions = [
  "My day is completely full.",
  "I cleared everything off my calendar.",
  "Now I have time for lunch with my friends."
];

let story2Images = ["priority.png", "busy.png", "empty.png"];
let story2Captions = [
  "My only plan today is lunch with my friends.",
  "Then school and work took over my whole day.",
  "Now I'm burnt out and have nothing planned."
];

let stages = ["Beginning", "Middle", "End"];

let images = story1Images;
let captions = story1Captions;
let index = 0;

let storyImage = document.getElementById("storyImage");
let caption = document.getElementById("caption");
let stage = document.getElementById("stage");
let storyTitle = document.getElementById("storyTitle");

// functions
function updatePage() {
  storyImage.src = images[index];
  caption.textContent = captions[index];
  stage.textContent = stages[index];
}

function next() {
  if (index < 2) {
    index = index + 1;
  } else {
    index = 0;
  }
  updatePage();
}

function back() {
  if (index > 0) {
    index = index - 1;
  }
  updatePage();
}

function showStory1() {
  images = story1Images;
  captions = story1Captions;
  storyTitle.textContent = "Making Time";
  index = 0;
  updatePage();
}

function showStory2() {
  images = story2Images;
  captions = story2Captions;
  storyTitle.textContent = "Burnout";
  index = 0;
  updatePage();
}

// event listeners
document.getElementById("nextButton").addEventListener("click", next);
document.getElementById("backButton").addEventListener("click", back);
document.getElementById("story1Button").addEventListener("click", showStory1);
document.getElementById("story2Button").addEventListener("click", showStory2);
storyImage.addEventListener("click", next);
