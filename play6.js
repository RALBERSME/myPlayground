// Get user data for vip ticket
if (localStorage.getItem("nickname")) {
  var nickname = localStorage.getItem("nickname");
}

console.log(nickname);
const nicknameCasino = document.getElementById("casinoCardName");

if (nickname) {
  const capitalNickname =
    nickname.charAt(0).toUpperCase() + nickname.slice(1).toLowerCase();
  nicknameCasino.textContent = `Ticket for: 
  ${capitalNickname} `;
} else {
  nicknameCasino.textContent = "Ticket for friend of the Grimaldis ";
}
