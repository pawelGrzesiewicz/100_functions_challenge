//Our football team has finished the championship.
//
// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
//
// For example: ["3:1", "2:2", "0:1", ...]
//
// Points are awarded for each match as follows:
//
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
//
// Notes:
//
// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

//My solution
function points(games) {
    return games.reduce((totalPoints, game) => {
        const [x, y] = game.split(':').map(Number);
        const points = x > y ? 3 : x === y ? 1 : 0;
        return totalPoints + points;
    }, 0);
}
console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));


//solutions

// const points=games=>games.reduce((output,current)=>{
//     return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
// },0)
//
// // function points(games) {
// //   return games.reduce((output,current)=>{
// //     let x = parseInt(current[0]);
// //     let y = parseInt(current[2]);
// //     let value= x>y ? 3 : x===y ? 1 : 0;
// //     return output+value;
// //   },0)
// // }



// function points(games) {
//     var sum=0;
//     for (var i=0; i<games.length; ++i)
//     {
//         if (games[i][0]>games[i][2])
//             sum+=3;
//         if (games[i][0]==games[i][2])
//             sum+=1;
//     }
//     return sum;
// };