//product of an array

/*
//by using for of loop
function productOfArray(arr){
    let result=1;
    for(let num of arr){
        result*=num
    }
    return result   
}
console.log(productOfArray([1,2,3,4,5])) //120;

*/

//by using reduce method
function productofarr(arr){
    return arr.reduce((a,b)=>a*b)
}
console.log(productofarr([1,2,3,4,5])) //120;
