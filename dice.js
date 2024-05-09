const output1 = document.getElementById("output1");
const output2 = document.getElementById("output2");
const diff = document.getElementById("diff");
const amount = document.getElementById("amount");
const diceFaces = [
  "<i class='fa-solid fa-dice-one'></i>",
  "<i class='fa-solid fa-dice-two'></i>",
  "<i class='fa-solid fa-dice-three'></i>",
  "<i class='fa-solid fa-dice-four'></i>",
  "<i class='fa-solid fa-dice-five'></i>",
  "<i class='fa-solid fa-dice-six'></i>",
];

let firstValue = "";
let secondValue = "";

function throwDice1() {
  let randomDiceFace = Math.floor(Math.random() * 6 + 1);
  output1.innerHTML = diceFaces[randomDiceFace - 1];
  firstValue = randomDiceFace;
  return firstValue;
}
function throwDice2() {
  document.getElementById("throw1").disabled = false;
  document.getElementById("throw2").disabled = false;
  let randomDiceFace = Math.floor(Math.random() * 6 + 1);
  output2.innerHTML = diceFaces[randomDiceFace - 1];
  secondValue = randomDiceFace;
  /*calculate Differences: */
  let differenceValue = (firstValue - secondValue) * 100;
  let newUserCount = Number(localStorage.getItem("userCount"));
  let newAmount = newUserCount + differenceValue;
  diff.classList.remove("hide");
  diff.textContent = `${differenceValue}`;
  amount.textContent = `${newAmount}`;
  localStorage.setItem("userCount", newAmount);
  /*end of calculate Differences*/
  leaveCasino(newAmount);
  return secondValue;
}

function startGame() {
  let userCount = Number(localStorage.getItem("userCount"));
  let userCountAfterStartPremium = userCount - 100;
  localStorage.setItem("userCount", userCountAfterStartPremium);
  let newUserCount = Number(localStorage.getItem("userCount"));
  output1.textContent = "";
  output2.textContent = "";
  diff.textContent = "";
  diff.classList.add("hide");
  amount.classList.remove("hide");
  amount.textContent = `${newUserCount}`;
  leaveCasino(newUserCount);
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
