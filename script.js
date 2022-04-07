// Randomly chooses between Rock, Paper and Scissors
function computerPlay (){
    let choice = Math.floor(Math.random()*3);
    switch(choice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors";
    }
}

// Determines the result of a round
function playRound(playerSelection,computerSelection){

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();


    if(playerSelection===computerSelection){
        return "It's a draw.";

    }else{
        switch(playerSelection){
            case "rock":
                if(computerSelection==="scissors"){
                    return "You Win! Rock beats Scissors"
                }else{
                    return "You Lose! Paper beats Rock"
                }
            case "paper":
                if(computerSelection==="rock"){
                    return "You Win! Paper beats Rock"
                }else{
                    return "You Lose! Scissors beats Paper"
                }
            case "scissors":
                if(computerSelection==="paper"){
                    return "You Win! Scissors beats Paper"
                }else{
                    return "You Lose! Rock beats Scissors"
                }
            default:
                return "Something went wrong. Make sure your spelling is correct!"
        }
    }
}

// Play for 5 rounds
function game(){
    let playerSelection;
    let computerSelection;
    let playScore=0;
    let computerScore=0;

    for(let i =0; i<5; i++){
        playerSelection=window.prompt("Choose Rock, Paper or Scissors");
        computerSelection=computerPlay();

        result=playRound(playerSelection,computerSelection);

        if(result.charAt(4)==="W"){
            playScore++;
        }else if(result.charAt(4)==="L"){
            computerScore++;
        }
    }

    let finalScore = playScore + ":" + computerScore;
    
    if(playScore>computerScore){
        return "You win! You beat the Computer with a final score of "+finalScore;
    }else if(playScore<computerScore){
        return "You Lose! The Computer beats you with a final score of " +finalScore;
    }else{
        return "It's a tie! Score: " + finalScore;
    }

}

console.log(game());
//const playerSelection = "rock";
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection,computerSelection));