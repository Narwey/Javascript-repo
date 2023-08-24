function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    const index = Math.floor(Math.random()*choices.length);
    return choices[index];
}
const test = getComputerChoice();
console.log(test);
// 4 PLAY A GAME
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a tie';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'Computer wins';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'Player wins';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'Computer wins';
    } else {
        return 'Player wins';
    }
}

const playerSelection = 'rock'; // Replace with the actual player choice
const computerSelection = getComputerChoice();
const result = playRound(playerSelection, computerSelection);
console.log(result);
    
