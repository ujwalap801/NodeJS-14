//Modules protects their varaubles and functions from leaking  out

function calSum(a,b)
{
    const sum = a+b;
    console.log(sum);
}



module.exports = calSum;