// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
//
//     Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
//
// Example:
//     n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!


// My solution
function paperwork(n, m) {
    let sum = n * m
    if (n > 0 && m > 0 && sum > 0) {
        return sum;
    } else {
        return 0;
    }
}
console.log(paperwork(5, -5));


//solutions

// function paperwork(n, m) {
//     return n > 0 && m > 0 ? n * m : 0
// }


// function paperwork(n, m) {
//     if (m < 0 || n < 0) {
//         return 0;
//     }
//     return m * n;
// }

// paperwork = (n, m) => n < 0 || m < 0 ? 0 : n * m
