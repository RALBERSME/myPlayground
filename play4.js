// Call User
if (localStorage.getItem("nickname")) {
  var nickname = localStorage.getItem("nickname");
}

console.log(nickname);
const nicknameCta = document.getElementById("nicknameCta");
console.log(nicknameCta);
if (nickname) {
  const capitalNickname =
    nickname.charAt(0).toUpperCase() + nickname.slice(1).toLowerCase();
  nicknameCta.textContent = `Hey ${capitalNickname}, `;
} else {
  nicknameCta.textContent = "Hey there,";
}
