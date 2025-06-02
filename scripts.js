// Variables
var score = 0;
var currentQ = 0;

// Update Copyright Year function 
const currentDate = new Date();
document.querySelector("#copyrightYear").innerText = currentDate.getFullYear();

// Constants
const scoreText = document.querySelector("#scoreText");
const questions = document.querySelectorAll(".q-container");


// Check answer function
function checkAnswer(question, result) {
    let answer = document.querySelector(`input[name="${question}"]:checked`);
    let qResult = document.querySelector(result);
    qResult.style.display = "block";

    if (answer) {
        document.querySelector("#" + question).disabled = true;
        if (answer.value === "correct") {
          qResult.innerText = "Correct";
          score+=1;
          scoreText.innerText = `Score: ${score}`;
          nextQ();
        } else {
          qResult.innerText = "Incorrect";
          nextQ();
        }
      } else {
        qResult.innerText = "Please select an answer";
      }
}


// Display first question
questions[0].style.display = "block";
questions[0].style.opacity = 1;


// Next question function
function nextQ() {
    questions[currentQ].classList.add("fade-out");
    setTimeout(() => {
    if (currentQ < questions.length - 1) {
    questions[currentQ].style.display = "none";
    currentQ++;
    questions[currentQ].classList.add("slide-left");
    questions[currentQ].style.display = "block";
    } 
}, "2000");
}

// Change Hero function
const heroSlides = document.querySelectorAll('.hero-slide');
var currentHeroIndex = 0;

function changeHero(direction) {
  heroSlides[currentHeroIndex].classList.remove("active");
  currentHeroIndex = currentHeroIndex + direction;

  if (currentHeroIndex < 0){
      currentHeroIndex = 4;
  } else if (currentHeroIndex > 4) {
      currentHeroIndex = 2;
    } else if (currentHeroIndex > 2) {
      currentHeroIndex = 0;
    }

    heroSlides[currentHeroIndex].classList.add("active");
}

// Index
let openHam = document.querySelector('#openHam');
let closeHam = document.querySelector('#closeHam');
let navigationItems = document.querySelector('.nav-items');

const burgerEvent = (navigation, close, open) => {
    if (navigation == "none"){
        navigationItems.style.removeProperty("display");
    } else {
        navigationItems.style.display = navigation;
    }
    closeHam.style.display = close;
    openHam.style.display = open;
}

openHam.addEventListener('click', () => burgerEvent("flex", "block", "none"));
closeHam.addEventListener('click', () => burgerEvent("none", "none", "block"));