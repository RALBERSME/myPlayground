function changeScene() {
  const overlayTop = document.getElementById("overlayTop");
  const overlayBottom = document.getElementById("overlayBottom");
  console.log(overlayBottom, overlayTop);
  overlayTop.style.animation = "rotateUp 5s 0s linear forwards";
  overlayBottom.style.animation = "rotateDown 5s 0s linear forwards";
}

/* drag & drop game */
let details = document.getElementById("details");
let choosenImageId = localStorage.getItem("choosenImageId");

console.log("chosenImgID", choosenImageId, nickname);
const imageArray = [];
const nameArray = ["Linda", "Bello", "Jim", "Flora", "Gregg"];

if (choosenImageId) {
  let choosenId = Number(choosenImageId[3]);
  var nickname = localStorage.getItem("nickname");
  if (nickname.length > 1) {
    nameArray[choosenId - 1] = nickname;
  }
}
let posLeft = 30;
const solutionOverlay = document.getElementById("solutionOverlay");
function showInfo(num) {
  if (num === 1) {
    details.textContent = `I'm ${nameArray[0]}. I love playing cards with nice people and the right drinks. I have nothing in mind with drugs. I like it here in Monte-Carlo, even though I'm not used to playing cards with a dog.`;
  } else if (num === 2) {
    details.textContent = `Wow. I am ${nameArray[1]}, the dog. I think it's so great here. Today I went on the carousel with the children and played roulette and dice. There's really a lot going on and I could do it all at once, that's how much fun I have.`;
  } else if (num === 3) {
    details.textContent = `My name is ${nameArray[2]}. I play guitar passionately. You have to concentrate like hell at the gaming table. My game neighbors are really difficult to understand. Bello is always fidgeting and Flora's eyes are hard to read under the green stuff she's wearing on her head.`;
  } else if (num === 4) {
    details.textContent = `I'm ${nameArray[3]}. I also enjoy playing with passion. But I also want to find a rich man here. That's why I make myself look so pretty. Once I draw a playing card, I immediately reach into my purse to correct the powder, eyeliner or lipstick. I want to be the most beautiful in the whole casino.`;
  } else if (num === 5) {
    details.textContent = `I'm ${nameArray[4]}. I love wearing checked shirts. Nobody can see when I work up a sweat while playing cards. Well, the most important thing when playing is to always keep an eye on your neighbors. Flora and her make-up really annoy me. She always opens and closes her handbag next to me. Can't this just end? She's pretty, you have to give her that...`;
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
  let feedbackSolution = document.getElementById("feedbackSolution");
  feedbackSolution.classList.remove("hide");

  feedbackSolution.textContent = `
${nameArray[0]} created a coffee stain with her coffee cup.
        ${nameArray[1]} (dog) still had the sticky teddy from the carousel in his
        mouth and because of the honey the teddy immediately stuck to the card.
        ${nameArray[2]} (guitar player) plucked some lilac from ${nameArray[3]}'s hair and
        pressed it onto the card to distract from himself. ${nameArray[3]} caused
        confusion by adding a note to her card with the eyeliner pen.
        ${nameArray[4]} with the checkered shirt had stolen ${nameArray[3]}'s lipstick and
        used it to press a kiss on the card to distract from himself.`;

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
    let userCountAfterAddedPremium = userCount + 5000;
    localStorage.setItem("userCount", userCountAfterAddedPremium);
    fazit.textContent = `Everything correct. You made 5000 coins. It´s now: ${userCountAfterAddedPremium} coins`;
    fazit.style.color = "green";

    setTimeout(() => {
      window.location.href = "play7.html";
    }, 29000);
  } else {
    fazit.textContent =
      "Sorry, it was not correct. You have to leave the casino.";
    fazit.style.color = "red";
    setTimeout(() => {
      window.location.href = "sorry.html";
    }, 29000);
  }
}
