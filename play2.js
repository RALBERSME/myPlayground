function changeText() {
  console.log("mouseover function");
  document.getElementById("getSolution").textContent =
    "click here for solution";
}
const solution = document.querySelector(".solution");
const list2text = document.getElementById("list2text");
function showSolution() {
  solution.style.display = "block";
  list2text.textContent = "One possible solution:";
}
