// // const arr =[10,20,30,10,40,50,20]
// // console.log(arr)

// // const set1 = new Set(arr) 
// // console.log(set1)

// // let set = new Set([1,2,3,3,4]);

// // console.log(set);

// let arr =[10,20,30,10,40,50,20]
// const set2 = new Set(...[arr])
// console.log([...set2]) //array mai se duplicate element remove ho jayega aur array mai hi return hoga spread function use kar rahe hain

// set2.add(55) // 55 add ho jayega unique element hai
// set2.add(10) // already 10 h toh add nhi hoga
// console.log([...set2])
// arr = [...set2] // aiise bhi kar sakte hain
// console.log(arr)

// union of set
// const set1= new Set([10,20,15,25,30,35])
// const set2 = new Set([5,10,20,25,80])

// const set3 = new Set([...set1,...set2] )
// console.log(set3) // yeh object format mai return karega
// arr = [...set3]
// console.log(arr) // yeh array format mai

// console.log(typeof(arr), typeof(set3)) // jaisa ki pata array bhi object hi hota js mai toh dono object hi aayega

// // intersection
// const set1= new Set([10,20,15,25,30,35])
// const set2 = new Set([5,10,20,25,80])
// const intersection = [...set1].filter((num)=> {
//   const intersection_value = set2.has(num)
//   return intersection_value;
// })
//   console.log(intersection)

// // In ShortHand
// const intersection1 = [...set1].filter((num)=> set2.has(num))
//   console.log(intersection1)

// Iterate over set 
const set1= new Set([10,20,15,25,30,35])
const set2 = new Set([5,10,20,25,80])
// using for of
// for(let value of set1)
//   console.log(value)

// using forEach
set2.forEach((value) => console.log(value))