// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//my solution

function removeChar(str){
  return str.slice(1, -1)
}

console.log(removeChar('slice'));

// solutions
//
// const removeChar = str => str.slice(1,-1)
//
// function removeChar(str){
//   return str.substring(1, str.length-1);
// }
//
