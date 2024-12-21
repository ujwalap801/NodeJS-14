//Modules protects their varaubles and functions from leaking  out


console.log("sum module executed");

let x = "Hi";


// z ="Hello world";     It wont give any error  because of non -sstrict differeence
function calculateSum(a,b){
    const sum = a+b;
    console.log(sum);
}

//  =>Old way of exporting
module.exports = 
{
    x:x,
    calculateSum:calculateSum

    }    

//=>New way of exporting ES6 modules

module.exports = 
{
    x,
    calculateSum

    }



    // Exporting the module twice using module.exports will not throw an error directly, but it will overwrite the first module.exports with the second one.

  
    module.exports.x =x;
    module.exports.calculateSum=calculateSum;