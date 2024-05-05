const bee = document.getElementById("bee");
const giraffe1 = document.getElementById("giraffe1");
const giraffe2 = document.getElementById("giraffe2");
const message = document.getElementById("message");
const btn = document.getElementById("btn");
const drop1 = document.getElementById("drop1");
const drop2 = document.getElementById("drop2");

setTimeout(() => {
  giraffe1.classList.add("disappear");
  drop1.classList.add("hide");
  drop2.classList.add("hide");
  giraffe2.classList.remove("hide");
}, 4000);
setTimeout(() => {
  message.classList.remove("hide");
  btn.classList.remove("hide");
  bee.classList.remove("hide");
}, 8000);
