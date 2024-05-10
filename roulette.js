let options = [
  "100",
  "500",
  "-1000",
  "0",
  "400",
  "3000",
  "-200",
  "300",
  "1500",
  "-2500",
  "600",
  "700",
  "-800",
  "900",
];

let startAngle = 0;
let arc = Math.PI / (options.length / 2);
let spinTimeout = null;

let spinArcStart = 10;
let spinTime = 0;
let spinTimeTotal = 0;

let ctx;

document.getElementById("spin").addEventListener("click", spin);

let resultOfGame = "";

function drawRouletteWheel() {
  let canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    let outsideRadius = 250;
    let textRadius = 215;
    let insideRadius = 165;

    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 500, 500);

    ctx.strokeStyle = "#C13A37";
    ctx.lineWidth = 2;

    ctx.font = "25px Great Vibes, cursive";

    for (var i = 0; i < options.length; i++) {
      let angle = startAngle + i * arc;
      ctx.fillStyle = "rgb(243, 192, 200)";

      ctx.beginPath();
      ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
      ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
      ctx.stroke();
      ctx.fill();

      ctx.save();
      ctx.shadowOffsetX = -1;
      ctx.shadowOffsetY = -1;
      ctx.shadowBlur = 0;
      ctx.shadowColor = "#C13A37";
      ctx.fillStyle = "#C13A37";
      ctx.translate(
        250 + Math.cos(angle + arc / 2) * textRadius,
        250 + Math.sin(angle + arc / 2) * textRadius
      );
      ctx.rotate(angle + arc / 2 + Math.PI / 2);
      let text = options[i];
      ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
      ctx.restore();
    }

    //Arrow
    ctx.fillStyle = "#C13A37";
    ctx.beginPath();
    ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
    ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
    ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
    ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
    ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
    ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
    ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
    ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
    ctx.fill();
  }
}

function spin() {
  spinAngleStart = Math.random() * 10 + 10;
  spinTime = 0;
  spinTimeTotal = Math.random() * 3 + 4 * 1000;
  rotateWheel();
  startGame();
}

function rotateWheel() {
  spinTime += 30;
  if (spinTime >= spinTimeTotal) {
    stopRotateWheel();
    return;
  }
  let spinAngle =
    spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
  startAngle += (spinAngle * Math.PI) / 180;
  drawRouletteWheel();
  spinTimeout = setTimeout("rotateWheel()", 30);
}

function stopRotateWheel() {
  clearTimeout(spinTimeout);
  let degrees = (startAngle * 180) / Math.PI + 90;
  let arcd = (arc * 180) / Math.PI;
  let index = Math.floor((360 - (degrees % 360)) / arcd);
  ctx.save();
  ctx.font = "50px Great Vibes, cursive";
  let text = options[index];
  resultOfGame = Number(text);
  ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10);
  ctx.restore();
  manageCount(resultOfGame);
}

function easeOut(t, b, c, d) {
  let ts = (t /= d) * t;
  let tc = ts * t;
  return b + c * (tc + -3 * ts + 3 * t);
}

drawRouletteWheel();

/*user Counter */
function startGame() {
  document.querySelector(".counter").classList.remove("hide");
  manageCount(-1000);
}

function leaveCasino(newAmount) {
  if (newAmount < 0) {
    let rules = document.querySelector(".rules");
    rules.style.color = "red";
    rules.style.fontSize = "5rem";
    rules.style.paddingLeft = "150px";
    rules.style.paddingTop = "40px";
    rules.textContent = "Game over!";
    setTimeout(() => {
      window.location.href = "sorry.html";
    }, 3000);
  }
}

function manageCount(num) {
  let userCount = Number(localStorage.getItem("userCount"));
  let userCountAfterStartPremium = userCount + num;
  localStorage.setItem("userCount", userCountAfterStartPremium);
  let newUserCount = Number(localStorage.getItem("userCount"));
  let userCountOutput = document.getElementById("userCountOutput");
  userCountOutput.textContent = `${newUserCount}`;
  leaveCasino(newUserCount);
}
