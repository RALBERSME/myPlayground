function checkEntry(event) {
  var input = document.getElementById("input").value;
  const feedback = document.getElementById("feedback");
  if (!input) {
    feedback.textContent = "Please enter a number!";
  } else if (input === "60") {
    feedback.textContent = `You wrote ${input} and that is correct!
    Alice and Ben cross the bridge (10min.),
    Alice returns with lamp (5min.),
    Carla and Denis cross the bridge (25 min.),
    Ben returns with lamp (10min.) then
    Alice and Ben cross the bridge again (10min).`;
  } else {
    feedback.textContent = `You wrote ${input} and that is NOT correct. Try it again.`;
  }
  event.preventDefault();
}

function showQuiz() {
  const quiz = document.getElementById("quiz");
  quiz.classList.remove("hide");
}
