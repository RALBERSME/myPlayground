const shitPositions = [
  { top: "36%", left: "50%" } /*linker Schirm 0*/,
  { top: "60%", left: "80%" } /*rechter Schuh 1*/,
  { top: "70%", left: "10%" } /*Spielbrett 2 */,
  { top: "61%", left: "60%" } /*linker Schuh 3*/,
  { top: "66%", left: "50%" } /*linke Matte 4*/,
  { top: "60%", left: "45%" } /*Tasche 5*/,
  { top: "46%", left: "88%" } /*Ball 6*/,
  { top: "46%", left: "68%" } /*rechter Schirm 7*/,
  { top: "68%", left: "68%" } /*rechte Matte 8*/,
];
let guess = "";
let randomPosition = "";
const shit = document.getElementById("shit");
/* money */
const amount = document.getElementById("amount");
const diff = document.getElementById("diff");
const overlay = document.querySelector(".overlay");

function startGame() {
  overlay.classList.remove("hide");
  let userCount = Number(localStorage.getItem("userCount"));
  let userCountAfterStartPremium = userCount - 300;
  localStorage.setItem("userCount", userCountAfterStartPremium);
  let newUserCount = Number(localStorage.getItem("userCount"));
  diff.classList.add("hide");
  amount.classList.remove("hide");
  amount.textContent = `${newUserCount}`;
  leaveCasino(newUserCount);

  randomPosition = Math.floor(Math.random() * 9);
  console.log("random", typeof randomPosition);
  shit.style.top = shitPositions[randomPosition].top;
  shit.style.left = shitPositions[randomPosition].left;
  shit.classList.remove("hide");

  new Audio("Music/seagull.mp3").play();

  if (randomPosition === 2) {
    shitOnPaper();
  }

  setTimeout(() => {
    shit.classList.add("hide");
    overlay.classList.add("hide");
    randomPosition = Math.floor(Math.random() * 9);
  }, 2000);
}

function leaveCasino(newAmount) {
  if (newAmount < 0) {
    diff.classList.remove("hide");
    diff.style.color = "red";
    diff.style.width = "180px";
    diff.textContent = "Game over!";
    setTimeout(() => {
      window.location.href = "sorry.html";
    }, 3000);
  }
}
const field1 = document.getElementById("field1");
changeStyle(field1, 0);

const field2 = document.getElementById("field2");
changeStyle(field2, 6);

const field3 = document.getElementById("field3");
changeStyle(field3, 7);

const field4 = document.getElementById("field4");
changeStyle(field4, 4);

const field5 = document.getElementById("field5");
changeStyle(field5, 5);

const field6 = document.getElementById("field6");
changeStyle(field6, 8);

const field7 = document.getElementById("field7");
changeStyle(field7, 3);

const field8 = document.getElementById("field8");
changeStyle(field8, 2);

const field9 = document.getElementById("field9");
changeStyle(field9, 1);

function changeStyle(field, guessNum) {
  field.addEventListener("click", () => {
    field.style.backgroundColor = "yellow";
    field.style.color = "black";
    guess = guessNum;
    if (guess === randomPosition) {
      field.style.backgroundColor = "green";
      field.style.paddingBottom = "0px";
      document.getElementById("winMessage").classList.remove("hide");
      let userCount = Number(localStorage.getItem("userCount"));
      let userCountAfterStartPremium = userCount + 2000;
      localStorage.setItem("userCount", userCountAfterStartPremium);
      let newUserCount = Number(localStorage.getItem("userCount"));
      amount.textContent = `${newUserCount}`;
      randomPosition = Math.floor(Math.random() * 9);
    }
    setTimeout(() => {
      field.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      field.style.color = "wheat";
      field.style.paddingBottom = "10px";
      document.getElementById("winMessage").classList.add("hide");
      document.getElementById("compensation").classList.add("hide");
    }, 3000);
  });
}

function shitOnPaper() {
  document.getElementById("compensation").classList.remove("hide");
  let userCount = Number(localStorage.getItem("userCount"));
  let userCountAfterStartPremium = userCount + 500;
  localStorage.setItem("userCount", userCountAfterStartPremium);
  let newUserCount = Number(localStorage.getItem("userCount"));
  amount.textContent = `${newUserCount}`;
}

function disableFields() {
  const allFields = document.querySelectorAll(".field");
  for (var i = 0; i < allFields.length; i++) {
    allFields[i].disabled = true;
  }
}

function enableFields() {
  const allFields = document.querySelectorAll(".field");
  for (var i = 0; i < allFields.length; i++) {
    allFields[i].disabled = false;
  }
}
