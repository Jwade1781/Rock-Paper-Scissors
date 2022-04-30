let playerScore = 0;
let computerScore = 0;
let choiceDictionary = {
    0: "Rock",
    1: "Paper",
    2: "Scissors"
}

function play(){
    const playerLayer = document.getElementsByClassName("layer3")[0];
    const playButton = document.getElementById("playButton");
    playButton.style.visibility = "hidden";
    playerLayer.style.visibility = "visible";
}

function playerTurn(playerChoice){

    let computerChoice = computerTurn();
    let result = determineWin(computerChoice, playerChoice);
    console.log("Result: " + result + "\tPlayer choice: " + playerChoice + "\tComputer choice: " + computerChoice);
}

function computerTurn(){
    randomNum = Math.floor(Math.random() * Object.keys(choiceDictionary).length)
    return choiceDictionary[randomNum]
}

function determineWin(computerChoice, playerChoice){
    if (playerChoice === computerChoice)
        return 0;

    // Win conditions
    else if ((playerChoice === "Rock" && computerChoice === "Scissors") || (playerChoice === "Paper" && computerChoice ==="Rock")){
        playerScore++;
        document.getElementById("playerScore").innerHTML = "Player Score: " + playerScore;
        return 1;
    }

    // Lose Condition
    else{
        computerScore++;
        document.getElementById("computerScore").innerHTML = "Computer Score: " + playerScore;
        return -1;
    }
}