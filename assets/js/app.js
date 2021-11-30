const playerOne = false;
const playerTwo = false;
const buttonRock = document.getElementById('rock');
const buttonSheet = document.getElementById('sheet');
const buttonScissors = document.getElementById('scissors');
let choicePlayerOne = document.getElementById('choice_player1');
let choicePlayerTwo = document.getElementById('choice_player2');
let resultPlayerOne = document.getElementById('result1');
let resultPlayerTwo = document.getElementById('result2');
let equality = document.getElementById('equality');
let array = ["💎", "🌿", "✂️"];
let imageOne = "💎";
let imageTwo = "🌿";
let imageThree = "✂️";

buttonRock.addEventListener("click", function () {
    choicePlayerOne.innerHTML = imageOne;
    choicePlayerTwo.innerHTML = array[Math.floor(Math.random() * array.length)];
})

buttonSheet.addEventListener("click", function () {
    choicePlayerOne.innerHTML = imageTwo;
    choicePlayerTwo.innerHTML = array[Math.floor(Math.random() * array.length)];
})

buttonScissors.addEventListener("click", function () {
    choicePlayerOne.innerHTML = imageThree;
    choicePlayerTwo.innerHTML = array[Math.floor(Math.random() * array.length)];
})



