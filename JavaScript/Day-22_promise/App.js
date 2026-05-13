// promise in JavaScript
cart = ["Pizza", "Tea", "EggRoll"]

function placeOrder(cart) {
  console.log("Talking with Domino's ");

  const pr = new Promise(function (resolve, reject) {
    setTimeout(() => {
      const food_available = true;
      if (food_available) {

        console.log("Order Placed Succesfully ");
        const order = { orrderId: 2125, food: cart, restaurant: "Dominos", location: "Dwarka" }
        resolve(order);
      }
      else {
        reject("Items Out of stocks")
      }
      
    }, 2000);
  });
  return pr;
};

function preparingOrder(order) {
  console.log("Pizza is preparing Start....");
  const pr = new Promise(function (resolve, reject) {

    setTimeout(() => {
      console.log("Pizza preparing done. ")
      const foodDetails = { token: 12, restaurant: order.restaurant, location: order.location };

      resolve(foodDetails);
    }, 5000);
  })
  return pr
};


function pickupOrder(foodDetails) {
  console.log("Reaching restaurant for picking Order");
  const pr = new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Order picked by deliver partner")
      const droplocation = foodDetails.location;
      resolve(droplocation);
    }, 5000);
  });
  return pr;
}


function deliverOrder(droplocation) {
  console.log("Delivery boy on the way");

  setTimeout(() => {
    console.log("Order Delivered succesfully");
  }, 5000)
}

placeOrder(cart)
.then(order=>preparingOrder(order))
.then(foodDetails=>pickupOrder(foodDetails))
.then(droplocation=>deliverOrder(droplocation))
.catch(error=>console.log(error));