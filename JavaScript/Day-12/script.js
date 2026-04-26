// const user = { name: "Ali" };

// console.log(Object.getOwnPropertyDescriptor(user, "name"));

// // output:-
// // { value: 'Ali', 
// //   writable: true, 
// //   enumerable: true, 
// //   configurable: true }
const config = { 
  name : "Ali",
  API_KEY : "abc123"
}
Object.defineProperty(config, "API_KEY", {
  value: "abc123",
  // writable: false,
  enumerable: false
});
// console.log(config.API_KEY)
for(let key in config){
  console.log(key, config[key])
}