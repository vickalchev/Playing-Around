//1. Using the for...of loop to 
// const positiveSum = arr => {
//     let sumOfPositive = 0;
//     for (let i of arr) {
//         if (i>=0)
//             sumOfPositive += i;
//     }
//     return sumOfPositive;
// }


// 2. Using the the reduce method to add up only positive values;
const positiveSum = arr => {
 return arr.reduce((a,b) => a+ (b>0 ? b : 0));
}

// // 3. Using for loop
// const positiveSum = arr => {
//     let sumOfPositive = 0;
//     for (let i = 0; i<arr.length; i++) {
//         if (arr[i]>=0)
//             sumOfPositive += arr[i];
//     }
//     return sumOfPositive;
// }

//4. Using .filter()

// const positiveSum = arr => {
//     return arr.filter(i => i >= 0).reduce((a,b) => a+b,0);
// }

//5. Using .reduce() + Math.max()
// const positiveSum = arr => {
//     return arr.reduce((a, b) => a + Math.max(b,0),0);
// }

//6. Using .forEach()
const positiveSum = arr => {
    let sumOfPositive = 0;
    arr.forEach((a, i) => (a >=0) ? sumOfPositive += a :i++);
    return sumOfPositive;
}


array = [1, 3, -3, 4, 5, 6, 10];
console.log(positiveSum(array));
//result: 29;

'hey'.reduce((a,b) => a+b);
