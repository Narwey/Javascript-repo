// task 1 selection sorting 
let arr = [1,3,4,5,6,7,8];
function selection(arr) {
    const n = arr.length ;
    for(let i=0 ; i<n-1 ; i++){
        let min = i ;
        for(let j=i+1 ; j<n ; j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }   if(min !== i){
            const tmp = arr[i];
            arr[i]=arr[min];
            arr[min]=arr[i];}

    }   return arr ;
}   console.log(selection(arr)) ;
// task 2 bubble sorting
function bubbleSort(arr) {
    for(let i = 0 ; i < arr.length; i++){
        for (let j = 1 ; j < arr.length; j++){
            if( arr[j] > arr[j -1]){
                let tmp = arr[j];
                arr[j] = arr[j -1] ;
                arr[j -1] = tmp ;
            }
        }
    }
    return arr ;
}
console.log(bubbleSort(arr))
// task 3 insertion sorting 
function insertionSort(arr){
    for(let i = 0; i < arr.length; i++){
        currentNumber = arr[i] ;
        let j = i - 1 ;
        while(j >= 0 && arr[j] > currentNumber){
            arr[j +1] = arr[j];
            j-- ;
        }
        arr[j + 1] = currentNumber ;
    }
    return arr ;
}

console.log(insertionSort(arr))
// task 4 linear sorting
function linearSearch(arr, value){
    let existItem = false
     for(let i = 0; i < arr.length; i++){
        if( arr[i] == value) {
            existItem = true
        }
     }
     return existItem ? "Item found !" : "Not found !"
}

console.log(linearSearch(arr, 1))
// task 5 occurrence of c 
function matrixSearchOcc(matrix, c){
    occ = 0
    for(let i = 0 ; i < matrix.length ; i++){
        for(let j = 0; j < matrix[i].length; j++){
            matrix[i][j] == c ? occ += 1 : null
        }
    }
    return occ
}
console.log(matrixSearchOcc(
    [
        [1, 9, 0, 5, 7],
        [4, 3, 2, 0, 1],
        [0, 2, 1, 9, 8]
    ], 0));

