// Comparison Operators
// Comparison operators are used to compare two values.

// Comparison operators always return true or false.


let a1 = 1
let a2 = 2

console.log(a1 == a2)   //  "==	equal to Comparison operators"


/*Operator 	Name	Description	Example (true)
==	Equality	Equal with type coercion [1].	5 == "5"
===	Strict Equality	Same value and type [4].	5 === 5
!=	Inequality	Not equal with coercion [1].	5 != 8
!==	Strict Inequality	Not equal or different type [4].	5 !== "5"
>	Greater Than	Left side larger [4].	10 > 5
>=	Greater or Equal	Left side larger or equal [4].	10 >= 10
<	Less Than	Left side smaller [4].	5 < 10
<=	Less or Equal	Left side smaller or equal [4].	5 <= 5*/

let x = 10;
let str = "30";
console.log(x <= str)  // output ture type conversition hoga string in number mai.

// "===" 	Strict Equality	Same value and type 
let x1 = 10;
let str1 = "30";
console.log(x <= str) // output false because value same type diffrent hai

// null == undefined ----> ture
console.log(null == undefined) // equal to undefined h bas value mai type diffent hai null object type hai aur null undefined ka type undefined hota h
console.log(typeof null)
console.log(typeof undefined)

// null === undefined ----> false
console.log(null === undefined)
console.log(null == 5) //false

let m = "false" // m ki value sting hai 
let boll = false // boll ki value zero hai false means zero
console.log(m == boll) // false hoga

let n = 0 // m ki value sting hai 
let boll1 = false // boll ki value zero hai false means zero
console.log(n == boll1) // ture hoga

console.log(null)
////////////////////////////////////////////////
//////Bitwise//////////////////////
// 5  = 00000000000000000000000000000101 (binary)
// 3  = 00000000000000000000000000000011
// 5 & 3 = 00000000000000000000000000000001 = 1
console.log(5 & 3); // 1

