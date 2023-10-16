// DESCRIPTION:
//     Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// My solution
function evenOrOdd(number) {
    if (number % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}

console.log(evenOrOdd(45));

//solutions

// const evenOrOdd = number => number % 2 === 0 ? "Even" : "Odd"


// function evenOrOdd(number) {
//     return number%2==0 ? 'Even' : 'Odd'
// }


