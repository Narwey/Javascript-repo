const age = 24;
const name = 'Anouar benmbark' ;
const isStudent = true;
const FavoriteColor =['blue','red'];
const Studentstatus = isStudent ? "I am a student ." :"I am not a student .";
const string = age + " " + name + " " + Studentstatus ;
console.log(string);

 const readline = require('readline');
 const yourFavoriteAnimal = "elephant";
 const yourFavoriteColor = "blue";

 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 });

 rl.question("What is your favorite animal? ", function(userFavoriteAnimal) {
  rl.question("What is your favorite color? ", function(userFavoriteColor) {
     // Check if both favorite animal and color match
     if (userFavoriteAnimal === yourFavoriteAnimal && userFavoriteColor === yourFavoriteColor) {
      console.log("Wow, we have the same favorite animal and color!");
     } else {
      console.log("Nice choices, but they don't match my favorite animal and color.");
    }
     rl.close();
   });
 });
 
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number: ", userInput => {
  const number = parseFloat(userInput);

  if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid number.");
  } else {
    if (number > 0) {
      console.log("The number is positive.");
    } else if (number < 0) {
      console.log("The number is negative.");
    } else {
      console.log("The number is zero.");
    }
  }

  rl.close();
});
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a value: ", userInput => {
  if (userInput) {
    console.log("The value is truthy.");
  } else {
    console.log("The value is falsy.");
  }

  rl.close();
});


