//product of an array

function productOfArray(arr){
    let result=1;
    for(let num of arr){
        result*=num
    }
    return result   
}
console.log(productOfArray([1,2,3,4,5])) //120;
