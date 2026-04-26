// // Print numbers 1 to 10

// // for (let index = 1; index <= 10; index++) {
// //   console.log(index)
  
// // }
// // Print numbers 10 to 1

// // for (let i = 10; i >= 1; i--) {
// //   console.log(i)
  
// // }
// // Print even numbers from 1 to 20

// // for(let i = 1 ; i<=20; i++){
// //   if(i%2==0)
// //     console.log(i)
// // }

// // multiplication table

// let n=5 
// for(let i=1; i<=10; i++){
//   console.log(`${n} x ${i} = ${n*i}`)
// }

let arr = [10,2.5,30]
// arr.forEach(num =>console.log(num*num))
// arr.forEach((num,i,arr)=>{
//   console.log(arr)
// })

const result = arr.map((num)=>num*num).filter((num)=>num%2==0)
console.log(result) 