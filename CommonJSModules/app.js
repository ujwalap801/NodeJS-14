// Common JS Modules

// const obj= require("./sum");

// let a = 10;

// let b = 20;

// console.log(obj.x);
// obj.calculateSum(a,b);


const {x, calculateSum}= require("./sum"); //destructuring
// const {x, calculateSum}= require("./sum"); 
let a = 10;

let b = 20;

 console.log(x);
calculateSum(a,b);


// when destructuring with the same variable names (x and calculateSum) in the same scope, you will get a SyntaxError because JavaScript does not allow duplicate declarations of the same variables in the same scope.