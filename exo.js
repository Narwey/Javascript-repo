// // EXO 1 //
// const test = (num) => {
//     (num % 2 === 0) ? console.log(num +' is an even number') : console.log(num +' is odd');
// }
// test(4);
// // EXO 2 //
// const max = (number,numb) => {
//      (number > numb) ? console.log(number +' is the maximum') : console.log(numb +'is the maximum');
// }
// max(10,4);
// // EXO 3 //
// let sum = 1 ;
// const facto = (n) => {
//     for(let i=1 ; i<n ; i++){
//         sum += sum * i ;
//     }
//         return console.log(sum);
// }
// // facto(4);

// const { kMaxLength } = require("buffer");

// // EXO 3 WITH RECURSIVE //
// const fac = (n) => {
//     return (n === 0 || n === 1) ? 1 : (n * fac(n - 1));
//  }
// console.log(fac(7));
//   // Afficher le résultat

//   // EXO 4 POLINDROME //

//   function palindrom(str) {
//         let i = 0;
//         let j = str.length - 1 ;
//             while(i < j) {
//                 if(str[i] !== str[j]){
//                     console.log('not a polindrome');
//                     return ;
//                 }else {
//                     i = i + 1 ;
//                     j = j - 1 ;
//                 }};

//                  console.log('its a polindrome');
        
    
    
//   }

//   palindrom('radar');

//   // EXO 5 AREA OF RECTANGLE //
   
//   const Area = (h,l) => {
//     rep = h * l ;
//     console.log(`AREA OF THE RECTANGLE is ${rep} `)
//   }
//   console.log(rep);

//   Area(5,5);

  // EXO 6 Occurrence of an element //
    
//   const Occurrence = (array , str) => {
//     let n = array.length ;
//     let cpt = 0 ;
//     for(let i = 0 ; i < n ; i++){
//         if(array[i] == str){
//             cpt ++ ;
//         }
//     }
//     console.log(cpt);
//   }
//   const myArray = [1, 2, 3, 3 ,3];
//   const searchStr = 3;
//   Occurrence(myArray, searchStr);

// EXO 7 ALGO DISPLAY MIN AND MAX NUMBER //

  // const MaxMin = (array) => {
  //     let max = array[0];
  //     let min = array[0];
  //     let n = array.length ;
  //     let temp ;
  //     for(let i = 0 ; i < n ; i++){
  //       if(array[i] < min) 
  //           min = array[i];
  //         if(array[i] > max)
  //           max = array[i];
        
  //       // for(let j = i + 1 ; j < n ; j++ ){
  //         //     if(array[i] > array[j]){
  //         //       temp = array[i];
  //         //       array[i] = array[j];
  //         //       array[j] = temp ;
  //         //     }
  //         // }
  //     }
  //     // min = array[0];
  //     // max = array[n-1];
  //     console.log(`le minimum est ${min} et le maximum est ${max}`);
  // }
  // const tableau = [2,3,4,5,1];
  // MaxMin(tableau);

  // EXO 9 READS A SENTENCE 

    
    //     let sa = s.trim();
    //     let lt = s.length ;
    //     let cpt = 1 ;
    //     for(let i = 0 ; i < lt ; i++){
    //       if(sa[i] == " "){
    //           cpt ++ ;
    //       }
    //     } return cpt ;
    // }
    // const read = (str) => {
    // let n = str.trim().split(' ').length;
    // const a = ['a','e','o','u','i','y','A','E','O','U','I','Y'];
    // let cpt = 0;
    // for (let i=0;i<str.length;i++){
    //   if(a.includes(str[i])){
    //     cpt++;
    //   }
    // }
    //   console.log(cpt)

    //   console.log(n)
    // }

    // read('Anouar mcha');

    // EXO 10 
    // function sumOfDistinctElements(set1, set2) {
    //   const distinctElements = [];
    //   const array3 = set1.concat(set2);
    //   for (const element of array3) {
    //     if (set1.includes(element) && !set2.includes(element)) {
    //       distinctElements.push(element);
    //     } else if (set2.includes(element) && !set1.includes(element)) {
    //       distinctElements.push(element);
    //     }
    //   }
    //    const sum = distinctElements.reduce((x,y) =>  x+y ,0 );
    //   return sum;
    // }
    
    // // Example usage:
    // const set1 = [3, 1, 7, 9];
    // const set2 = [2, 4, 1, 9, 3];
    // const result = sumOfDistinctElements(set1, set2);
    // console.log(result); // Output: 13
    
    // EXO 11 Given integer and return how many in //

    // const NumOfInteger = (Num) => {
    //   const strn = Num + "" ;
    //   const arrayN = strn.length;
    //   return console.log(arrayN);
    // }
    // NumOfInteger(102222);

    // EXO 12 

    // const number = (num) => {
    //   const reverse = num.toString().split('').reverse().join('');
    //   console.log(reverse);}
    // number(30);

    
    // const reverse = (num1) => {
    //   const strn1 = num1 + "";
    //   const array = strn1.split('');
    //   const newarray = [];
    //   let j = 0 ;
    //   for(let i = array.length-1 ; i >= 0 ; i--){
    //     newarray[j] = array[i];
    //     j++ ;
    //   }
    //   return console.log(newarray.join(''));
    // }

    // reverse(200);

    // EXO 12 divisible //

  //   const div = (num) => {
  //       while(num > 0){
  //         if((num % 3 === 0 || num % 7 === 0)|| (num % 3 === 0 && num % 7 === 0)) {
  //           return console.log(true) ;
  //         }else {
  //           return console.log(false);
  //         }
  //       }
  //       console.log(`${num} is not a positive number , please enter a positive number`);
  // }
  //   div(-4);

  // var countSheep = function (num) {
  //   // Initialize an empty string
  //   let str = "";
  //   for (let i = 1; i <= num; i++) {
  //     // Concatenate the current number and "sheep" to the string
  //     str = str + `${i} sheep `;
  //   }
  //   console.log(str);
  // }

  // countSheep(3);

