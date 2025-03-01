//finding missing number in an array

function missingNumber(arr){
    let n =arr.length;
    let expectedsum=(n*(n+1))/2;
    let actualsum=arr.reduce((a,b)=>a+b,0);
    return expectedsum-actualsum;
}
console.log(missingNumber([3,0,1])); 
