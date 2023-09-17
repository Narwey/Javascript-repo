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

    // const read = (s) => {
    //     let sa = s.trim();
    //     let lt = s.length ;
    //     let cpt = 1 ;
    //     for(let i = 0 ; i < lt ; i++){
    //       if(sa[i] == " "){
    //           cpt ++ ;
    //       }
    //     } return cpt ;
    // }
    // let str = "anouar mcha ldar";
    // let n = str.trim().split(' ').length;
    // const a = ['a','e','o','u','i','y'];
    // let cpt = 0;
    // for (let i=0;i<str.length;i++){
    //   if(a.includes(str[i])){
    //     cpt++;
    //   }
    // }
    // console.log(cpt)

    // console.log(n);
    let a = [1,2,3,4,5];
    let b = [2,4,7,8,9];
    let s = 0 ;
    for(let i = 0 ; i < a.length ; i++){
      for(let j = 0 ; j < b.length ; j++){
        if(a[i] !== b[j]){
          s += a[i];
        }
      }
    }
    console.log(s);
      


