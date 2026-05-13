// // Async Await in JavaScript
// cart = ["Pizza", "Tea", "EggRoll"]

// function placeOrder(cart) {
//   console.log("Talking with Domino's ");

//   const pr = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       const food_available = true;
//       if (food_available) {

//         console.log("Order Placed Succesfully ");
//         const order = { orrderId: 2125, food: cart, restaurant: "Dominos", location: "Dwarka" }
//         resolve(order);
//       }
//       else {
//         reject("Items Out of stocks")
//       }
      
//     }, 2000);
//   });
//   return pr;
// };

// function preparingOrder(order) {
//   console.log("Pizza is preparing Start....");
//   const pr = new Promise(function (resolve, reject) {

//     setTimeout(() => {
//       console.log("Pizza preparing done. ")
//       const foodDetails = { token: 12, restaurant: order.restaurant, location: order.location };

//       resolve(foodDetails);
//     }, 5000);
//   })
//   return pr
// };


// function pickupOrder(foodDetails) {
//   console.log("Reaching restaurant for picking Order");
//   const pr = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("Order picked by deliver partner")
//       const droplocation = foodDetails.location;
//       resolve(droplocation);
//     }, 5000);
//   });
//   return pr;
// }


// function deliverOrder(droplocation) {
//   console.log("Delivery boy on the way");

//   setTimeout(() => {
//     console.log("Order Delivered succesfully");
//   }, 5000)
// }

// // Asyn and await
// async function zomato() {
  
//   const order = await placeOrder(cart);
//   const foodDetails = await preparingOrder(order);
//   const droplocation = await pickupOrder(foodDetails);
//   deliverOrder(droplocation);
// }


// zomato()

// **************************************************************************************************
// // // promise chaining
// // placeOrder(cart)
// // .then(order=>preparingOrder(order))
// // .then(foodDetails=>pickupOrder(foodDetails))
// // .then(droplocation=>deliverOrder(droplocation))
// // .catch(error=>console.log(error));
// ***************************************************************************************************

const person1 = {
  name : "mubasshir",
  age : 22
}
const person2 = {
  name : "mubasshir",
  age : 22
}

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(person1);
  }, 5000);
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(person2);
  }, 5000);
})

async function greet() {
  const userdata = await p1
  const username = userdata.name;
  console.log(username)
  const userAge = userdata.age;
  console.log(userAge)

  const userdata2 = await p2
  const username2 = userdata2.name;
  console.log(username2)
  const userAge = userdata2.age;
  console.log(userAge)
}
greet()