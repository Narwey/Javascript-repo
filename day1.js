// task 1
const age = 24;
const name = 'Anouar benmbark' ;
const isStudent = true;
const FavoriteColor =['blue','red'];
// task 2
const Studentstatus = isStudent ? "I am a student ." :"I am not a student .";
// task 3
const string = age + " " + name + " " + Studentstatus ;
console.log(string);

//task5
let myFavoriteAnimal = 'tiger'
let myFavoriteColor = 'red'
let yourFavoriteAnimal = prompt("What is your favorite animal :")
let yourFavoriteColor =  prompt("What is your favorite color :")
let task5 = `${myFavoriteAnimal == yourFavoriteAnimal
              && myFavoriteColor == yourFavoriteColor
             ? 'it matches' : 'it is unmatched'}`
console.log(task5)

//task6
let yourNumber = prompt("Enter a number :")
let task6 = `${yourNumber > 0 ? 'Your number is positive' 
      : yourNumber < 0 ? 'Your number is negative' : yourNumber === 0 
        ? 'your number is zero' : null}`
console.log(task6)

//task8
let yourValue =  prompt("Enter your value :")
let task8 = `${yourValue ? true : false}`
console.log(task8)
 