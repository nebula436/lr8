let userScore = 0;
let computerScore = 0;
const winningScore = 3;
let playerName = prompt("Введіть ваше ім'я:", "User");
if (!playerName || playerName.trim() === "") {
    playerName = "User";
}
document.getElementById("userName").textContent = playerName;

const generateBtn = document.getElementById("generateBtn");
const resetBtn = document.getElementById("resetBtn");
const userNumberEl = document.getElementById("userNumber");
const computerNumberEl = document.getElementById("computerNumber");
const userScoreEl = document.getElementById("userScore");
const computerScoreEl = document.getElementById("computerScore");
const messageEl = document.getElementById("message");

generateBtn.addEventListener("click", function() {
    let userRandom = Math.floor(Math.random() * 10) + 1;
    let computerRandom = Math.floor(Math.random() * 10) + 1;

    userNumberEl.textContent = userRandom;
    computerNumberEl.textContent = computerRandom;

    if (userRandom > computerRandom) {
        userScore++;
        messageEl.textContent = `${playerName} виграв раунд!`;
    } else if (userRandom < computerRandom) {
        computerScore++;
        messageEl.textContent = `Комп'ютер виграв раунд!`;
    } else {
        messageEl.textContent = `Нічия!`;
    }

    userScoreEl.textContent = userScore;
    computerScoreEl.textContent = computerScore;

    if (userScore === winningScore || computerScore === winningScore) {
        if (userScore === winningScore) {
            messageEl.textContent = `Переміг ${playerName}! `;
        } else {
            messageEl.textContent = `Переміг Computer!`;
        }
        generateBtn.style.display = "none";
        resetBtn.style.display = "inline-block";
    }
});

resetBtn.addEventListener("click", function() {
    userScore = 0;
    computerScore = 0;
    userScoreEl.textContent = "0";
    computerScoreEl.textContent = "0";
    userNumberEl.textContent = "-";
    computerNumberEl.textContent = "-";
    messageEl.textContent = `Гра триває до 3 перемог.`;
    
    generateBtn.style.display = "inline-block";
    resetBtn.style.display = "none";
});
