/* canvas */
var canvas = document.getElementById("myCanvas");
if (canvas.getContext) {
  var context = canvas.getContext("2d");

  context.beginPath();
  context.moveTo(200, 10);
  context.lineTo(200, 200);
  context.lineWidth = 5;
  context.strokeStyle = "#3B4839";
  context.stroke();

  context.beginPath();
  context.moveTo(200, 350);
  context.lineTo(200, 900);
  context.lineWidth = 5;
  context.strokeStyle = "#3B4839";
  context.stroke();

  context.beginPath();
  context.moveTo(400, 80);
  context.lineTo(400, 280);
  context.lineWidth = 5;
  context.strokeStyle = "#3B4839";
  context.stroke();

  context.beginPath();
  context.moveTo(400, 380);
  context.lineTo(400, 650);
  context.lineWidth = 5;
  context.strokeStyle = "#3B4839";
  context.stroke();

  context.beginPath();
  context.moveTo(600, 0);
  context.lineTo(600, 150);
  context.lineWidth = 5;
  context.strokeStyle = "#3B4839";
  context.stroke();

  context.beginPath();
  context.moveTo(600, 300);
  context.lineTo(600, 480);
  context.lineWidth = 5;
  context.strokeStyle = "#3B4839";
  context.stroke();

  context.beginPath();
  context.moveTo(600, 600);
  context.lineTo(600, 800);
  context.lineWidth = 5;
  context.strokeStyle = "#3B4839";
  context.stroke();

  context.beginPath();
  context.moveTo(900, 80);
  context.lineTo(900, 280);
  context.lineWidth = 5;
  context.strokeStyle = "#3B4839";
  context.stroke();

  context.beginPath();
  context.moveTo(900, 380);
  context.lineTo(900, 650);
  context.lineWidth = 5;
  context.strokeStyle = "#3B4839";
  context.stroke();

  context.beginPath();
  context.moveTo(1100, 0);
  context.lineTo(1100, 150);
  context.lineWidth = 5;
  context.strokeStyle = "#3B4839";
  context.stroke();

  context.beginPath();
  context.moveTo(1100, 300);
  context.lineTo(1100, 480);
  context.lineWidth = 5;
  context.strokeStyle = "#3B4839";
  context.stroke();

  context.beginPath();
  context.moveTo(1100, 600);
  context.lineTo(1100, 800);
  context.lineWidth = 5;
  context.strokeStyle = "#3B4839";
  context.stroke();

  context.beginPath();
  context.moveTo(1300, 80);
  context.lineTo(1300, 280);
  context.lineWidth = 5;
  context.strokeStyle = "#3B4839";
  context.stroke();

  context.beginPath();
  context.moveTo(1300, 380);
  context.lineTo(1300, 650);
  context.lineWidth = 5;
  context.strokeStyle = "#3B4839";
  context.stroke();
}

/* mouse run methods */
const displayUserCount = document.getElementById("displayUserCount");
const back = document.getElementById("back");
const startGame = document.getElementById("startGame");
const animationArray = [
  "mouseCheese1 10s 0s ease-in-out forwards",
  "mouseSuppe 10s 0s ease-in-out forwards",
  "mouseCheese2 10s 0s ease-in-out forwards",
  "bread 10s 0s ease-in-out forwards",
  "tortilla 10s 0s ease-in-out forwards",
];
let randomNumberArray = [];
let clickedNum = "";

function runGame() {
  const mouse = document.getElementById("mouse");
  randomNumber = Math.floor(Math.random() * 5);
  randomNumberArray.push(randomNumber);
  console.log("in run game array", randomNumberArray);
  mouse.style.animation = animationArray[randomNumber];
  let userCount = Number(localStorage.getItem("userCount"));
  let userCountAfterStartPremium = userCount - 200;
  userCountFn(userCountAfterStartPremium);
  checkMatch();
  randomNumberArray = [];
}

function userCountFn(userCountAfterStartPremium) {
  localStorage.setItem("userCount", userCountAfterStartPremium);
  let newUserCount = Number(localStorage.getItem("userCount"));
  displayUserCount.textContent = `${newUserCount}`;

  leaveCasino(newUserCount);
  setTimeout(() => {
    resetData();
  }, 12000);
}

function leaveCasino(newAmount) {
  if (newAmount < 0) {
    back.style.color = "orangered";
    back.style.backgroundColor = "pink";
    back.textContent = "Game over!";
    setTimeout(() => {
      window.location.href = "sorry.html";
    }, 3000);
  }
}

function evalClick(num) {
  clickedNum = num;
  const allBtns = document.querySelectorAll(".evaluation");

  for (let i = 0; i < allBtns.length; i++) {
    if (i != clickedNum) {
      allBtns[i].style.opacity = 0;
    }
  }
  const clickedBtn = document.getElementById(`eval${num + 1}`);
  clickedBtn.style.backgroundColor = "orange";
  clickedBtn.textContent = "your choice";
  clickedBtn.style.paddingTop = "25px";
  startGame.classList.remove("hide");
}

function resetData() {
  randomNum = "";
  clickedNum = "";
  const allBtns = document.querySelectorAll(".evaluation");

  for (let i = 0; i < allBtns.length; i++) {
    allBtns[i].style.opacity = 1;
    allBtns[i].textContent = "click";
    allBtns[i].style.color = "yellow";
    allBtns[i].style.backgroundColor = "#4b4b3a";
    allBtns[i].style.paddingTop = "25%";
    startGame.classList.add("hide");
  }

  back.style.color = "yellow";
  back.style.backgroundColor = "#4b4b3a";
  back.textContent = "get home to casino hall";
}

function checkMatch() {
  let correctNum = randomNumberArray[0];
  console.log("Array", randomNumberArray);
  console.log("in checkMatch", correctNum, clickedNum);
  setTimeout(() => {
    startGame.classList.add("hide");
    if (correctNum === clickedNum) {
      console.log("randomNumAfter", correctNum);
      console.log("clickedNumAfter", clickedNum);
      back.style.color = "green";
      back.style.backgroundColor = "wheat";
      back.textContent = "You won!";
      let userCount = Number(localStorage.getItem("userCount"));
      let userCountAfterWin = userCount + 500;
      localStorage.setItem("userCount", userCountAfterWin);
      let newUserCount = Number(localStorage.getItem("userCount"));
      displayUserCount.textContent = `${newUserCount}`;
    }
  }, 9900);
}
