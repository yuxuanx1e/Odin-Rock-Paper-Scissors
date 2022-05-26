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

    // Determine game outcome
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
        } // End of switch statement
    } // End of else statement

    // Update screen
    // Player and computer choice 
    switch(playerSelection){
        case "Rock":
            playerChoice.textContent='✊';
            break;
        case "Paper":
            playerChoice.textContent='✋';
            break;
        case "Scissors":
            playerChoice.textContent='✌';
            break;

    }
    switch(computerSelection){
        case "Rock":
            computerChoice.textContent='✊';
            break;
        case "Paper":
            computerChoice.textContent='✋';
            break;
        case "Scissors":
            computerChoice.textContent='✌️';
            break;
    }

    // Game outcome Message
    const msgArray= msg.split(":"); // Split string into two
    onScreenTextLarge.textContent=msgArray[0]; // Large text
    onScreenTextSmall.textContent=msgArray[1]; // Small text
    return msg;

}

// Update the current running score based on the string returned by playRound function
function updateScore(result){

    if(result.charAt(4)==="W"){ // Player Wins
        playerAvatar.innerHTML = '<img src="images/smug.gif">';
        playerScore++;
        
    }else if(result.charAt(4)==="L"){ // Player Loses
        playerAvatar.innerHTML = '<img src="images/cry.gif">';
        computerScore++;
    }else{ // Draw
        playerAvatar.innerHTML = '<img src="images/anya.jpeg">';
    }

    
    // Update scoreboard
    scoreBoardPlayer.textContent="Player " +playerScore;
    scoreBoardComputer.textContent="Computer "+computerScore;
}

// Toggle popup window view on and off
function toggleEndgameModal() {
    endgameModal.classList.toggle('active')
    overlay.classList.toggle('active')
  }


// Start the game. Display instructions and initialise score
function startGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore(''); // Initialsie scoreboard
    onScreenTextLarge.textContent="Choose Your Weapon"; // Large Text
    onScreenTextSmall.textContent="First to score 5 points wins the game"; // Small Text
    playerChoice.textContent='❔';
    computerChoice.textContent='❔';
    endgameModal.classList.remove('active');
    overlay.classList.remove('active');
  }


// Anonymous function calls handleClick when a button is clicked during gameplay
function handleClick(button){
    if(playerScore === 5 || computerScore === 5){ // Check if game has finished
        toggleEndgameModal(); // Display pop up window
        return
    }else{
        updateScore(playRound(button.getAttribute('id'),computerPlay())); // Play round then update the score
        if(playerScore === 5 || computerScore === 5){ // Check if there is a winner with the new score
            toggleEndgameModal();// Display popup window
            playerScore > computerScore? (endgameMsg.textContent = 'You won!'): (endgameMsg.textContent = 'You lost...');
        }
    }
}

//====================================== Main =================================================
let playerScore=0;        // Initialise player score
let computerScore=0;      // Initialise computer score

// Select existing elements in DOM
const displayElem = document.querySelector('.info');      // Select the div element for displaying msg and score
const buttons = document.querySelectorAll('button');         // Select all three buttons
const endgameModal = document.getElementById('endgameModal');// Popup window to display final result and ask to play again
const endgameMsg = document.getElementById('endgameMsg');    // Msg content of popup window
const overlay = document.getElementById('overlay');          // Overlay covering all area outside the popup window
const restartBtn = document.getElementById('restartBtn');    // "Play again" button
const playerAvatar = document.querySelector('.player-avatar'); // Selects player avator div element
const playerChoice = document.querySelector('.player-choice'); // Selects player choice div element
const computerChoice = document.querySelector('.computer-choice'); // Selects computer choice div element


// Create div elements on the page to display initial msg/result of each round and current score
const onScreenTextLarge = document.createElement('h2');
const onScreenTextSmall = document.createElement('h3');
const scoreBoard = document.createElement('div'); 
const scoreBoardPlayer = document.createElement('div');
const scoreBoardComputer = document.createElement('div'); 


// Add class attribute to the elements
scoreBoard.classList.add("scoreBoard");

// Start the game by initialising score and display instructions
startGame();

// Event listeners
buttons.forEach(button=>button.addEventListener('click',()=>handleClick(button))); // Call anonymous function when button is clicked
restartBtn.addEventListener('click', startGame);    // Play again button click
overlay.addEventListener('click', toggleEndgameModal); // Overlay element click

// Append elements to DOM
displayElem.appendChild(onScreenTextLarge);
displayElem.appendChild(onScreenTextSmall);
displayElem.appendChild(scoreBoard);
scoreBoard.appendChild(scoreBoardPlayer);
scoreBoard.appendChild(scoreBoardComputer);


