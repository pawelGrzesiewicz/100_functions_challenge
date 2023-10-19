// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//
//     Return your answer as a number.

//My solution
function sumMix(x){
    return  x.reduce((a, b)=> a + parseInt(b, 10), 0);
}

console.log(sumMix([3, '5', 6]));

//solutions

// function sumMix(x){
//     return x.map(a => +a).reduce((a, b) => a + b);
// }

// function sumMix(x){
//     let result = 0;
//     for (let n of x) {
//         result += parseInt(n);
//     }
//     return result;
// }