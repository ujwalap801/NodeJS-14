//Modules protects their varaubles and functions from leaking  out


console.log("sum module executed");

export let x = "Hi";

// z ="Hello world";     It gives error as z is not defined  because of strict differeence
    // Now ES Modules
    export function calculateSum(a,b){
        const sum = a+b;
        console.log(sum);
    }


    // export function calculateSum(a,b){
    //     const sum = a+b;
    //     console.log(sum);
    // }



    // you are defining two functions with the same name (calculateSum) and exporting both of them using ES Modules. This will result in an error because ES Modules do not allow duplicate function declarations with the same name in the same scope.