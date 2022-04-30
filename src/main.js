let playerScore = 0;
let computerScore = 0;
let choiceDictionary = {
    0: "Rock",
    1: "Paper",
    2: "Scissors"
}


function playerTurn(playerChoice){
    document.getElementsByClassName("layer3")[0].style.visibility = "visible";
    let computerChoice = computerTurn();
    let result = determineWin(computerChoice, playerChoice);
}

function computerTurn(){
    randomNum = Math.floor(Math.random() * Object.keys(choiceDictionary).length)
    return choiceDictionary[randomNum]
}

function determineWin(computerChoice, playerChoice){
    document.getElementById("movesHeader").innerHTML = "Player Move: " + playerChoice + "<br>Computer Move: " + computerChoice;
    if (playerChoice === computerChoice){
        document.getElementById("outcomeHeader").innerHTML = "Draw!";
        return 0;
    }
    // Win conditions
    else if ((playerChoice === "Rock" && computerChoice === "Scissors") || (playerChoice === "Paper" && computerChoice ==="Rock")){
        playerScore++;
        document.getElementById("outcomeHeader").innerHTML = "You Win!";
        document.getElementById("playerScore").innerHTML = "Player Score: " + playerScore;
        return 1;
    }

    // Lose Condition
    else{
        computerScore++;
        document.getElementById("outcomeHeader").innerHTML = "You Lose!";
        document.getElementById("computerScore").innerHTML = "Computer Score: " + playerScore;
        return -1;
    }
}