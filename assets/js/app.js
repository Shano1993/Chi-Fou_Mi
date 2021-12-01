// variable declaration
const buttonRock = document.getElementById('rock');
const buttonSheet = document.getElementById('sheet');
const buttonScissors = document.getElementById('scissors');
let choicePlayerOne = document.getElementById('choice_player1');
let choicePlayerTwo = document.getElementById('choice_player2');
let resultPlayerOne = document.getElementById('result1');
let resultPlayerTwo = document.getElementById('result2');
let equality = document.getElementById('equality');
let scoreRound = document.getElementById('score_round');
let won = document.getElementById('won');
let array = ["💎", "🌿", "✂️"];
let imageOne = "💎";
let imageTwo = "🌿";
let imageThree = "✂️";
let victory1 = 1;
let victory2 = 1;
let equalityScore = 1;
let restart = document.getElementById('restart');

// button choice rock
buttonRock.addEventListener("click", function () {
    choicePlayerOne.innerHTML = imageOne;
    choicePlayerTwo.innerHTML = array[Math.floor(Math.random() * array.length)];
    rock();
    win();
})

// button choice sheet
buttonSheet.addEventListener("click", function () {
    choicePlayerOne.innerHTML = imageTwo;
    choicePlayerTwo.innerHTML = array[Math.floor(Math.random() * array.length)];
    sheet();
    win();
})

// button choice scissors
buttonScissors.addEventListener("click", function () {
    choicePlayerOne.innerHTML = imageThree;
    choicePlayerTwo.innerHTML = array[Math.floor(Math.random() * array.length)];
    scissors();
    win();
})

function rock() {
    for (let i = 0; i < 1; i++) {
        if (choicePlayerOne.innerHTML === imageOne && choicePlayerTwo.innerHTML === imageThree) {
            scoreRound.innerHTML = "Le joueur 1 a gagné !";
            resultPlayerOne.innerHTML = victory1++;
        }
        else if (choicePlayerOne.innerHTML === imageOne && choicePlayerTwo.innerHTML === imageTwo) {
            scoreRound.innerHTML = "Le joueur 2 a gagné !";
            resultPlayerTwo.innerHTML = victory2++;
        }
        else if (choicePlayerOne.innerHTML === imageOne && choicePlayerTwo.innerHTML === imageOne) {
            scoreRound.innerHTML = "Egalité !";
            equality.innerHTML = equalityScore++;
        }
    }
}

function sheet() {
    for (let i = 0; i < 1; i++) {
        if (choicePlayerOne.innerHTML === imageTwo && choicePlayerTwo.innerHTML === imageOne) {
            scoreRound.innerHTML = "Le joueur 1 a gagné !";
            resultPlayerOne.innerHTML = victory1++;
        }
        else if (choicePlayerOne.innerHTML === imageTwo && choicePlayerTwo.innerHTML === imageThree) {
            scoreRound.innerHTML = "Le joueur 2 a gagné !";
            resultPlayerTwo.innerHTML = victory2++;
        }
        else if (choicePlayerOne.innerHTML === imageTwo && choicePlayerTwo.innerHTML === imageTwo) {
            scoreRound.innerHTML = "Egalité !";
            equality.innerHTML = equalityScore++;
        }
    }
}

function scissors() {
    for (let i = 0; i < 1; i++) {
        if (choicePlayerOne.innerHTML === imageThree && choicePlayerTwo.innerHTML === imageTwo) {
            scoreRound.innerHTML = "Le joueur 1 a gagné !";
            resultPlayerOne.innerHTML = victory1++;
        }
        else if (choicePlayerOne.innerHTML === imageThree && choicePlayerTwo.innerHTML === imageOne) {
            scoreRound.innerHTML = "Le joueur 2 a gagné !";
            resultPlayerTwo.innerHTML = victory2++;
        }
        else if (choicePlayerOne.innerHTML === imageThree && choicePlayerTwo.innerHTML === imageThree) {
            scoreRound.innerHTML = "Egalité !";
            equality.innerHTML = equalityScore++;
        }
    }
}

function win() {
    if (victory1 === 4) {
        won.innerHTML = "Le joueur 1 a gagné la partie !";
    }
    else if (victory2 === 4) {
        won.innerHTML = "Le joueur 2 a gagné la partie !";
    }
}

// restart game
restart.addEventListener("click", function () {
    won.innerHTML = " ";
    scoreRound.innerHTML = " ";
    resultPlayerOne.innerHTML = "0";
    resultPlayerTwo.innerHTML = "0";
    equality.innerHTML = "0";
    victory1 = 1;
    victory2 = 1;
    equalityScore = 1;
})








