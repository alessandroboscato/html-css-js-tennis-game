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

// function create random number for the TOP
function toRightBall() {
  var toRight = (Math.random() * 78) + 10;
  console.log(toRight);
  tennisBall.style.top = toRight + "%";
  tennisBall.style.left = "calc(80% - 35px)";
}
function toLeftBall() {
  var toRight = (Math.random() * 78) + 10;
  console.log(toRight);
  tennisBall.style.top = toRight + "%";
  tennisBall.style.left = "calc(20% + 10px)";
}

// function startGame

//min top-left (10% | 20%+10px)
//max bot-right (90%-25px | 80%-35px) 
var tennisBall = document.getElementById("tennis-ball");

function startGame() {
  var score1 = 0;
  var score2 = 0;

  setTimeout(toRightBall, 2000);
  setTimeout(toLeftBall, 4000);
  setTimeout(toRightBall, 6000);
  setTimeout(toLeftBall, 8000);
  setTimeout(toRightBall, 10000);
  setTimeout(toLeftBall, 12000);
  setTimeout(toRightBall, 14000);
  setTimeout(toLeftBall, 16000);
  setTimeout(toRightBall, 18000);
  setTimeout(toLeftBall, 20000);
  setTimeout(toRightBall, 22000);
  setTimeout(toLeftBall, 24000);
  setTimeout(toRightBall, 26000);
  setTimeout(toLeftBall, 28000);
  setTimeout(toRightBall, 30000);
  setTimeout(toLeftBall, 32000);
  setTimeout(toRightBall, 34000);
  setTimeout(toLeftBall, 36000);
  setTimeout(toRightBall, 38000);
  setTimeout(toLeftBall, 40000);

}



// script

// randomAndComplementaryColor();
// document.getElementById("color-one").style.background = "rgb(" + redOne + ", " + greenOne + ", " + blueOne + ")";
// document.getElementById("color-two").style.background = "rgb(" + redCompl + ", " + greenCompl + ", " + blueCompl + ")";


document.getElementById("start-game").addEventListener("click", checkBeforeStart);
