// const arr = [12,15,10,20,50,8]
// const result = arr.filter(num => num%2==0)
// console.log(result)

// chaining
const arr = [12,15,10,20,50,8]
const result = arr.filter(num => num%2==0).map((num)=>num*num).filter((value) => value >=200)
console.log(result)
