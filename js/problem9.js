//finding missing number in an array

function missingNumber(arr){
    let n=arr.length;
    let expectedSum=(n*(n+1))/2;
    let actualSum = arr.reduce((a,b)=> a+b,0);
    
}