// script for Tennis Game


// function for generate a random color (rgb from 10 to 210)

var redOne;
var greenOne;
var blueOne;

function randomColor() {
  redOne = Math.floor((Math.random() * 201) + 10);
  greenOne = Math.floor((Math.random() * 201) + 10);
  blueOne = Math.floor((Math.random() * 201) + 10);
}
// function for generate a random color with a complementary color

var redCompl;
var greenCompl;
var blueCompl;

function randomAndComplementaryColor() {
  randomColor();
  redCompl = 255 - redOne;
  greenCompl = 255 - greenOne;
  blueCompl = 255 - blueOne;
}
// function for checking before start the game "checkBeforeStart()"

var selectCharacterOne;
var selectCharacterTwo;

function checkBeforeStart() {
  selectCharacterOne = document.getElementById("select-character-one").value;
  selectCharacterTwo = document.getElementById("select-character-two").value;
  if (selectCharacterOne === selectCharacterTwo) {
    alert("Select two different character");
  } else {
    document.getElementById("homepage").classList.add("d-none");
    document.getElementById("game").classList.remove("d-none");
    startGame();
  }
}

// function startGame

function startGame() {
  alert("game started");
}


// script

// randomAndComplementaryColor();
// document.getElementById("color-one").style.background = "rgb(" + redOne + ", " + greenOne + ", " + blueOne + ")";
// document.getElementById("color-two").style.background = "rgb(" + redCompl + ", " + greenCompl + ", " + blueCompl + ")";


document.getElementById("start-game").addEventListener("click", checkBeforeStart);
