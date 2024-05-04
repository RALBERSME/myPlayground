const hider = document.querySelector(".hider");
const whiteBorder = document.querySelector(".whiteBorder");
const quiz = document.querySelector(".quiz");
const solution = document.querySelector(".solution");
const nextPage = document.getElementById("nextPage");
function provideSolution() {
  hider.classList.add("hide");
  whiteBorder.classList.remove("hide");
  quiz.style.opacity = 0;
  solution.style.animation = "showSolution 3s 1s ease-in-out forwards";
  setTimeout(() => {
    nextPage.classList.remove("hide");
  }, 6000);
}
