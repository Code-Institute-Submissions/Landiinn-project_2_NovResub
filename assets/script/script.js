const playBtn = document.querySelectorAll(".playBtn");
const resultText = document.querySelector("result");
const rounds = document.querySelector("rounds");

const userscore = document.querySelector("user_score");
const compscore = document.querySelector("comp_score");


let player;
let computer;
let result

playBtn.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
   console.log(player);
}))


