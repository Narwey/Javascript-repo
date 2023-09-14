// EXO 1 //
const test = (num) => {
    (num % 2 === 0) ? console.log(num +' is an even number') : console.log(num +' is odd');
}
test(4);
// EXO 2 //
const max = (number,numb) => {
     (number > numb) ? console.log(number +' is the maximum') : console.log(numb +'is the maximum');
}
max(10,4);
// EXO 3 //
let sum = 1 ;
const facto = (n) => {
    for(let i=1 ; i<n ; i++){
        sum += sum * i ;
    }
        return console.log(sum);
}
// facto(4);

// EXO 3 WITH RECURSIVE //
const fac = (n) => {
    return (n === 0 || n === 1) ? 1 : (n * fac(n - 1));
 }
console.log(fac(7));
  // Afficher le résultat

  // EXO 4 POLINDROME //

  function palindrom(str) {
        let i = 0;
        let j = str.length - 1 ;
            while(i < j) {
                if(str[i] !== str[j]){
                    console.log('not a polindrome');
                    return ;
                }else {
                    i = i + 1 ;
                    j = j - 1 ;
                }};

                 console.log('its a polindrome');
        
    
    
  }

  palindrom('radar');

  // EXO 5 AREA OF RECTANGLE //
   
  const Area = (h,l) => {
    rep = h * l ;
    console.log(`AREA OF THE RECTANGLE is ${rep} `)
  }
  console.log(rep);

  Area(5,5);
        
        