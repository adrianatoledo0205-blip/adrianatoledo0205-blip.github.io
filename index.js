const greeting = document.getElementById("greeting")
greeting.style.textAlign = "center"
greeting.style.margintop = "50px"
const username = window.prompt ("what's your name ?", "Jane")
greeting.textContent = "welcome to my website, " + username + "!"