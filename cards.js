function changeScene() {
  const overlayTop = document.getElementById("overlayTop");
  const overlayBottom = document.getElementById("overlayBottom");
  console.log(overlayBottom, overlayTop);
  overlayTop.style.animation = "rotateUp 5s 0s linear forwards";
  overlayBottom.style.animation = "rotateDown 5s 0s linear forwards";
}

/* drag & drop game */
let details = document.getElementById("details");

const imageArray = [];

let posLeft = 30;
const solutionOverlay = document.getElementById("solutionOverlay");
function showInfo(num) {
  if (num === 1) {
    details.textContent =
      "I'm Linda. I love playing cards with nice people and the right drinks. I have nothing in mind with drugs. I like it here in Monte-Carlo, even though I'm not used to playing cards with a dog.";
  } else if (num === 2) {
    details.textContent =
      "Wow. I am Bello, the dog. I think it's so great here. Today I went on the carousel with the children and played roulette and dice. There's really a lot going on and I could do it all at once, that's how much fun I have.";
  } else if (num === 3) {
    details.textContent =
      "My name is Jim. I play guitar passionately. You have to concentrate like hell at the gaming table. My game neighbors are really difficult to understand. Bello is always fidgeting and Flora's eyes are hard to read under the green stuff she's wearing on her head.";
  } else if (num === 4) {
    details.textContent =
      "I'm Flora. I also enjoy playing with passion. But I also want to find a rich man here. That's why I make myself look so pretty. Once I draw a playing card, I immediately reach into my purse to correct the powder, eyeliner or lipstick. I want to be the most beautiful in the whole casino.";
  } else if (num === 5) {
    details.textContent =
      "I'm Gregg. I love wearing checked shirts. Nobody can see when I work up a sweat while playing cards. Well, the most important thing when playing is to always keep an eye on your neighbors. Flora and her make-up really annoy me. She always opens and closes her handbag next to me. Can't this just end? She's pretty, you have to give her that...";
  }
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  imageArray.push(data);
  posLeft += 12;
  solutionOverlay.style.left = `${posLeft}%`;
  console.log("final Array after fn", imageArray);
}
console.log("final Array", imageArray);
let fazit = false;

function checkArrays() {
  document.getElementById("feedbackSolution").classList.remove("hide");
  document.getElementById("evaluateBtn").classList.add("hide");
  document.getElementById("solutionOverlay").classList.add("hide");
  let fazit = document.getElementById("fazit");
  fazit.classList.remove("hide");

  if (
    imageArray[0] === "img5" &&
    imageArray[1] === "img3" &&
    imageArray[2] === "img2" &&
    imageArray[3] === "img1" &&
    imageArray[4] === "img4"
  ) {
    let userCount = Number(localStorage.getItem("userCount"));
    let userCountAfterDoublingPremium = userCount * 2;
    localStorage.setItem("userCount", userCountAfterDoublingPremium);
    fazit.textContent = `Everything correct. You doubled your budget. It´s now: ${userCountAfterDoublingPremium} coins`;
    fazit.style.color = "green";

    setTimeout(() => {
      window.location.href = "play7.html";
    }, 3000);
  } else {
    fazit.textContent =
      "Sorry, it was not correct. You have to leave the casino.";
    fazit.style.color = "red";
    setTimeout(() => {
      window.location.href = "sorry.html";
    }, 3000);
  }
}
