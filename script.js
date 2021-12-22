"use strict";
// Important Declaration
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

// Click Event
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // If there is no value
  if (!guess) {
    displayMessage("❌ No number here!!!");
  }
  // If the guess is right
  else if (guess === randomNumber) {
    displayMessage("🎉 That's right!!!");
    displayScore(score);
    document.querySelector("h1").textContent = "Hurayyyy !!!!";
    document.querySelector("body").style.backgroundColor = "#e5a77d";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = randomNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } // If the guess is wrong
  else {
    // If the guess is too high or too low
    if (guess > randomNumber + 2 || guess < randomNumber - 2) {
      if (score > 0) {
        guess > randomNumber
          ? displayMessage("Your guess is too high")
          : displayMessage("Your guess is too low");
        score--;
        displayScore(score);
      } else {
        displayMessage("You lost the game !!!");
      }
    }
    // If the guess is near but still higher or still lower
    else if (guess > randomNumber || guess < randomNumber) {
      if (score > 0) {
        guess > randomNumber
          ? displayMessage("Near, but still higher")
          : displayMessage("Near, but still lower");
        score--;
        displayScore(score);
      } else {
        displayMessage("You lost the game !!!");
      }
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayScore(score);
  displayMessage("Guessing...");
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#c8c3b4";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
});
