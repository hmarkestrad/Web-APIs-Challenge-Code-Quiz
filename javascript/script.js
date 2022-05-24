let counter = 29;
let timeout;
let GameStatus = 0;
let HighScores = 0;

function ViewScores() {
  counter = 0;
  document.getElementById("Item-Start").style.display = "none";
  document.getElementById("Item-Reg").style.display = "none";
  document.getElementById("Game-End").style.display = "none";
  document.getElementById("Item-Scores").style.display = "block";
  
  if( HighScores == 0) {
    document.getElementById("High-Scores").innerHTML = "No Scores to Show";
  }
  else {
  const HighScores = ["Banana", "Orange", "Apple", "Mango"];
  HighScores.push("Kiwi");
  document.getElementById("High-Scores").innerHTML = HighScores;
  }
}

function Question_01_incorrect() { document.getElementById("question_01").style.color = "gray"; }
function Question_02_incorrect() { document.getElementById("question_02").style.display = "block"; }
function Question_03_incorrect() { document.getElementById("question_03").style.display = "block"; }
function Question_04_incorrect() { document.getElementById("question_04").style.display = "block"; }
function Question_05_incorrect() { document.getElementById("question_05").style.display = "block"; }
function Question_06_incorrect() { document.getElementById("question_06").style.display = "block"; }

function Question_01_correct() { 
  boop();
  document.getElementById("MainViewer_01").style.display = "none";
  document.getElementById("MainViewer_02").style.display = "flex"; }

function Question_02_correct() {
  document.getElementById("MainViewer_02").style.display = "none";
  document.getElementById("MainViewer_03").style.display = "flex"; }

function Question_03_correct() {
  document.getElementById("MainViewer_03").style.display = "none";
  document.getElementById("MainViewer_04").style.display = "flex"; }

function Question_04_correct() {
  document.getElementById("MainViewer_04").style.display = "none";
  document.getElementById("MainViewer_05").style.display = "flex"; }

function Question_05_correct() {
  document.getElementById("MainViewer_05").style.display = "none";
  document.getElementById("MainViewer_06").style.display = "flex"; }

function Question_06_correct() {
  document.getElementById("MainViewer_06").style.display = "none";
  document.getElementById("Game-End").style.display = "flex"; }

function StartTimer() { 
  if(GameStatus == 0) {
    timedCount();
    GameStatus = 1;
    document.getElementById("Item-Start").style.display = "none";
    document.getElementById("Item-Reg").style.display = "none";
    document.getElementById("Item-Scores").style.display = "none";
    document.getElementById("MainViewer_01").style.display = "flex";
  }

  if(GameStatus == 2) {
    GameStatus = 3;
    document.getElementById("MainViewer_01").style.display = "none";
    document.getElementById("MainViewer_02").style.display = "flex";
  }

  if(GameStatus == 3) {
    GameStatus = 4;
    document.getElementById("MainViewer_02").style.display = "none";
    document.getElementById("MainViewer_03").style.display = "flex";
  }

  if(GameStatus == 4) {
    GameStatus = 5;
    document.getElementById("MainViewer_03").style.display = "none";
    document.getElementById("MainViewer_04").style.display = "flex";
  }

  if(GameStatus == 5) {
    GameStatus = 6;
    document.getElementById("MainViewer-04").style.display = "none";
    document.getElementById("MainViewer_05").style.display = "flex";
  }

  if(GameStatus == 6) {
    GameStatus = 7;
    document.getElementById("MainViewer_05").style.display = "none";
    document.getElementById("MainViewer_06").style.display = "flex";
  }

}
function timedCount() {
  if(counter >= 0 ) {
    let str = counter.toString().padStart(2, '0');
    document.getElementById("TimerDisplay").innerHTML = "TIME: " + str;
    counter--;
    timeout = setTimeout(timedCount, 1000);
  }
}