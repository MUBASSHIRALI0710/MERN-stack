// Callback Hell in JavaScript

function PlaceOrder(callback) {
  console.log("Talking with Domino's ");
  setTimeout(() => {
    console.log("Order Placed Succesfully ")
    callback();
  }, 2000);
}

function PreparingOrder(callback) {
  console.log("Pizza is preparing Start....");
  setTimeout(() => {
    console.log("Pizza preparing done. ")
    callback();
  }, 5000);
}

function PickupOrder(callback) {
  console.log("Reaching restaurant for picking Order");
  setTimeout(() => {
    console.log("Order picked by deliver partner")
    callback();
  }, 5000);
}

function DeliverOrder() {
  console.log("Deliver partner on the way");
  setTimeout(() => {
    console.log("Order deliver succesfully.")

  }, 5000);
}


// This is a callback Hell ===>>>
PlaceOrder(() => {
  PreparingOrder(() => {
    PickupOrder(() => {
      DeliverOrder(() => {

      });
    });
  });
});
// This is a callback Hell ===>>> Callback hell is a situation where multiple nested callbacks make code difficult to read and maintain.
// ❌ code bahut andar chala jata hai
// ❌ hard to read
// ❌ difficult debugging
// ❌ maintenance difficult
// Next task previous task pe depend karta hai
// nested callbacks = callback hell
// Problems:❌ unreadable  ❌ hard debugging  ❌ difficult maintenance



// PreparingOrder();
// PickupOrder();
// DeliverOrder();