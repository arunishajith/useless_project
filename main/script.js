let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Function to generate the computer's choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * options.length);
    return options[randIdx];
};

// Function to handle a draw
const drawGame = () => {
    console.log("Game was a draw");
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "#081b31"; // Corrected to 'style' instead of 'computedStyleMap'
};

// Function to display the winner or loser
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! your ${userChoice} beats computer's ${compChoice}`;
        msg.style.backgroundColor = "green"; // Corrected to 'style' instead of 'Style'
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"; // Corrected to 'style' instead of 'Style'
    }
};

// Main game function
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        drawGame();
    } else {
        // Determine if the user wins (userChoice wins against compChoice)
        let userWin = false;
        if (userChoice === "rock") {
            userWin = compChoice === "scissors"; // Rock beats Scissors
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock"; // Paper beats Rock
        } else if (userChoice === "scissors") {
            userWin = compChoice === "paper"; // Scissors beat Paper
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

// Event listeners for user choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
