//finding missing number in an array

function missingNum(arr){
    let n=arr.length+1;
    let expectedSum= (n*(n+1)/2)
    let actualSum = arr.reduce((a,b)=>a+b)
    return expectedSum-actualSum
}
console.log(missingNum([1,2,3,4,5,6,7,9])) 