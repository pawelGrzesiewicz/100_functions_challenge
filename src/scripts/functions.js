// task_1
function evenOrOdd(number) {
    if (number % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}
// const evenOrOdd = number => number % 2 === 0 ? "Even" : "Odd"
console.log(evenOrOdd(45));


//task_2
function paperwork(n, m) {
    let sum = n * m
    if (n > 0 && m > 0 && sum > 0) {
        return sum;
    } else {
        return 0;
    }
}
// function paperwork(n, m) {
//     return n > 0 && m > 0 ? n * m : 0
// }
console.log(paperwork(5, -5));


//task_3
function betterThanAverage(classPoints, yourPoints) {
    const classAverage = (classPoints.reduce((total, point) => total + point, 0) + yourPoints) / (classPoints.length + 1);
    return yourPoints > classAverage;
}

// function betterThanAverage(classPoints, yourPoints) {
//     return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
// }

console.log(betterThanAverage([3, 5, 6], 5));


function sumMix(x){
    return  x.reduce((a, b)=> a + parseInt(b, 10), 0);
}
// function sumMix(x){
//     return x.map(a => +a).reduce((a, b) => a + b);
// }

console.log(sumMix([3, '5', 6]));


//task_4
function points(games) {
    return games.reduce((totalPoints, game) => {
        const [x, y] = game.split(':').map(Number);
        const points = x > y ? 3 : x === y ? 1 : 0;
        return totalPoints + points;
    }, 0);
}

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
console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));
