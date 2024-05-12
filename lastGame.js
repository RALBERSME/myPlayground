let startTime = 0;
const showTime = document.getElementById("showTime");
let textTypedCorrectly = false;
let isExclamationIncluded = false;
let keptInTime = true;

function startGame() {
  const myQuote =
    "I had him neutered today and now he is probably canceling all his appointments!";
  const displayText = document.getElementById("displayText");
  displayText.classList.remove("hide");
  document.getElementById("stop").classList.remove("hide");
  document.getElementById("leave").classList.remove("hide");
  const typedText = document.getElementById("typedText");
  showTime.classList.remove("hide");
  startTimer(showTime);
  typedText.addEventListener("input", () => {
    const arrayQuote = displayText.querySelectorAll("span");
    const arrayValue = typedText.value.split("");

    let correct = true;
    arrayQuote.forEach((characterSpan, index) => {
      const character = arrayValue[index];
      if (character == null) {
        characterSpan.classList.remove("correct");
        characterSpan.classList.remove("incorrect");
        correct = false;
      } else if (character === characterSpan.innerText) {
        characterSpan.classList.add("correct");
        characterSpan.classList.remove("incorrect");
      } else {
        characterSpan.classList.remove("correct");
        characterSpan.classList.add("incorrect");
        correct = false;
      }
    });

    if (correct) renderNewQuote();
    if (correct && arrayValue.includes("!")) {
      isExclamationIncluded = true;
    }
    if (!correct) {
      textTypedCorrectly = true;
    }
  });

  async function renderNewQuote() {
    const quote = myQuote;
    displayText.innerHTML = "";
    quote.split("").forEach((character) => {
      const characterSpan = document.createElement("span");
      characterSpan.innerText = character;
      displayText.appendChild(characterSpan);
    });
    typedText.value = null;
  }
}

function startTimer(showTime) {
  showTime.textContent = 0;
  startTime = new Date();
  setInterval(() => {
    if (calculateTime() <= 30) {
      showTime.textContent = calculateTime();
    } else {
      showTime.textContent = "LOST";
      showTime.style.color = "orange";
      document.getElementById("stop").classList.add("hide");
      keptInTime = false;
    }
  }, 1000);
}

function calculateTime() {
  return Math.floor((new Date() - startTime) / 1000);
}

function stopGame() {
  if (textTypedCorrectly && keptInTime && isExclamationIncluded) {
    const displayText = document.getElementById("displayText");
    displayText.textContent = "YOU SAVED THE FISH";
    displayText.style.color = "green";
    showTime.classList.add("hide");
    setTimeout(() => {
      const body = document.getElementById("body");
      body.style.backgroundImage = "url('Img/Meerjungfrau.png')";
      body.style.backgroundRepeat = "no-repeat";
      const game = document.getElementById("game");
      game.classList.add("hide");
    }, 2500);
    setTimeout(() => {
      window.location.href = "bye.html";
    }, 8000);
  } else {
    showTime.classList.add("hide");
    const stopped = document.getElementById("stop");
    stopped.textContent = "LOST";
    stopped.style.color = "orange";
    stopped.style.fontWeight = "bold";
  }
}
