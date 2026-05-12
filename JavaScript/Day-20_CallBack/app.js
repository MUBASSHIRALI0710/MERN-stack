// Callback in JavaScript
// A callback is a function passed into another function to execute later.

function FeachUser(callback){
  console.log('feach user data....')
  setTimeout(()=>{
     console.log('Data feach succesfully....')
     const userData = {
      name : "Mubasshir Ali",
      age : 29,
      city : "Delhi"
     }
     callback(userData);
  } ,3000)
}

function greet(userData) {
  console.log(`hello ${userData.name}`)
}
function meet(userData) {
  console.log(`be will meet in ${userData.city}`)
}
function userage(userData) {
  console.log(`Your age is :  ${userData.age}`)
}


FeachUser(greet);
FeachUser(meet);
FeachUser(userage);

// Tum pizza order karte ho:
// "Pizza ready ho jaye toh mujhe call kar dena"
// Ye “call kar dena” = callback