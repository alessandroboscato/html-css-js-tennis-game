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
  document.getElementById("character-two").style.top = toRight - 2 + "%";
}
function toLeftBall() {
  var toLeft = (Math.random() * 78) + 10;
  console.log(toLeft);
  tennisBall.style.top = toLeft + "%";
  tennisBall.style.left = "calc(20% + 10px)";
  document.getElementById("character-one").style.top = toLeft - 2 + "%";
}

// function startGame

//min top-left (10% | 20%+10px)
//max bot-right (90%-25px | 80%-35px)

var tennisBall = document.getElementById("tennis-ball");

function startGame() {
  var score1 = 0;
  var score2 = 0;

  randomAndComplementaryColor();
  document.getElementById("color-one").style.background = "rgb(" + redOne + ", " + greenOne + ", " + blueOne + ")";
  document.getElementById("color-two").style.background = "rgb(" + redCompl + ", " + greenCompl + ", " + blueCompl + ")";

  setInterval(
    function()
    {
      setTimeout(toRightBall, 1600);
      setTimeout(toLeftBall, 3200);
    }, 3200
  );
}


// script

document.getElementById("start-game").addEventListener("click", checkBeforeStart);
