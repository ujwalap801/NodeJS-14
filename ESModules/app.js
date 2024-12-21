

import {x, calculateSum} from "./sum.js";

// import {x, calculateSum} from "./sum.js";

let a = 10;

let b = 20;

console.log(x);
calculateSum(a,b);



// JavaScript does not load the module twice. ES Modules follow the single instance per module rule. This means that sum.js will only be executed once, even if imported multiple times in the same file.


// When you import the same bindings (e.g., x and calculateSum) twice in the same file, it results in a SyntaxError. This is because JavaScript does not allow duplicate declarations of the same identifier within the same scope, and all import statements are processed before the code runs.