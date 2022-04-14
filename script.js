//================================= Function Declarations =====================================
// Randomly chooses between Rock, Paper and Scissors
function computerPlay (){
    let choice = Math.floor(Math.random()*3);
    switch(choice){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        default:
            return "Scissors";
    }
}

// Determines the result of a single round and display on screen
function playRound(playerSelection,computerSelection){

    let msg =''; // Initialise msg to be displayed on screen


    if(playerSelection===computerSelection){
        msg= "It's a draw!:"+playerSelection+" ties with "+computerSelection;

    }else{
        switch(playerSelection){
            case "Rock": // Player selected rock
                if(computerSelection==="Scissors"){
                    msg= "You Won!:Rock beats Scissors"; // ":" is added for string split method
                }else{
                    msg= "You Lost!:Paper beats Rock";
                }
                break; // Break from switch statement

            case "Paper":  // Player selected paper
                if(computerSelection==="Rock"){
                    msg ="You Won!:Paper beats Rock";
                }else{
                    msg = "You Lost!:Scissors beats Paper";
                }
                break;

            case "Scissors":  // Player selected scissors
                if(computerSelection==="Paper"){
                    msg= "You Won!:Scissors beats Paper";
                }else{
                    msg= "You Lost!:Rock beats Scissors";
                }
                break;
        }
    }
    const msgArray= msg.split(":"); // Split string into two
    onScreenTextLarge.textContent=msgArray[0]; // Large text
    onScreenTextSmall.textContent=msgArray[1]; // Small text
    return msg;

}

// Update the current running score based on the string returned by playRound function
function updateScore(result){

    if(result.charAt(4)==="W"){ // Player Wins
        playScore++;
    }else if(result.charAt(4)==="L"){ // Player Loses
        computerScore++;
    }

    // Update scoreboard
    scoreBoardPlayer.textContent="Player: " +playScore;
    scoreBoardComputer.textContent="Computer: "+computerScore;

    if(computerScore==5){
        alert("You Lost!");
    }else if(playScore==5){
        alert("You Won!");
    }

}


//====================================== Main =================================================
let playScore=0;        // Initialise player score
let computerScore=0;    // Initialise computer score

// Select existing elements in DOM
const displayElem = document.querySelector('.display'); // Select the div element for displaying msg and score
const buttons = document.querySelectorAll('button'); // Select all three buttons

// Create div elements on the page to display initial msg/result of each round and current score
const onScreenTextLarge = document.createElement('h1');
const onScreenTextSmall = document.createElement('h2');
const scoreBoardPlayer = document.createElement('div'); 
const scoreBoardComputer = document.createElement('div'); 

// Initialise display message and score
onScreenTextLarge.textContent="Choose Your Weapon"; // Large Text
onScreenTextSmall.textContent="First to score 5 points wins the game"; // Small Text
updateScore(''); // Initialsie scoreboard

// On each button click
buttons.forEach(button=>button.addEventListener('click',function(){
    updateScore(playRound(button.textContent,computerPlay())); // Play round then update the score
}));

// Append elements to DOM
displayElem.appendChild(onScreenTextLarge);
displayElem.appendChild(onScreenTextSmall);
displayElem.appendChild(scoreBoardPlayer);
displayElem.appendChild(scoreBoardComputer);


