const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
      return userInput;
    } else {
      console.log("Incorrect input");
      return null; }
  };
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      return "rock";
    } else if (randomNumber === 1) {
      return "paper";
    } else if (randomNumber === 2) {
      return "scissors";
    } else {
      return error;}};
  const determineWinner = (userChoice,computerChoice) => {
    if( userChoice === computerChoice ){
      return 'the game is a tie';}
    if(userChoice==='rock'){
      if(computerChoice==='paper'){
        return 'computer won';}
      else{
        return 'user won';}} 
    if(userChoice==='paper'){
      if(computerChoice==='rock'){
        return 'user won';}
      else if (computerChoice ==='scissors'){
        return 'computer won';}
      }
    if(userChoice==='scissors'){
      if(computerChoice ==='paper'){
        return 'user won';}
      else if(computerChoice==='rock'){
        return 'user won';}}
      };
    // test function
  // console.log(determineWinner('rock','scissors'));
  const playGame = () => {
    let userChoice = getUserChoice('rock');
    console.log(userChoice);
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
  }
  playGame()
    
