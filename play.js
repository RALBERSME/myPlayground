const elem = document.querySelector(".knob");
const tableau = document.querySelector(".tableau");
const frog = document.getElementById("frog");
elem.onclick = () => {
  tableau.style.animation = "rollingTableau 6s 1s linear forwards";
  frog.style.animation = "disappearfrog 1.8s 0s linear forwards";
};

//drag & drop

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
  localStorage.setItem("choosenImageId", data);
}

// Welcome Greeting;

const inp = document.getElementById("input");
const welcome = document.getElementById("welcome");
const starting = document.getElementById("starting");
let user = "";
inp.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    user = inp.value;
    localStorage.setItem("nickname", user);
    localStorage.setItem("userCount", 900);
    welcome.textContent = `Welcome on the playground 
    ${user.toUpperCase()} !!`;
    starting.style.display = "block";
  }
});
