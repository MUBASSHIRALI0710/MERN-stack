// const arr = [10, 20, 30, 40, 50]
// const result = arr.reduce((acc, curr) => {
//   return acc + curr
// }, 0);

// console.log(result)

let fruits = ["mango", "apple", "orange", "banana", "grapes", "mango", "apple", "orange", "mango", "apple", "orange", "banana", "grapes"]

const result1 = fruits.reduce((acc , current)=>{
    if(acc.hasOwnProperty(current))
      acc[current]++;

    else
      acc[current] = 1

    return acc

},{})

console.log(result1)