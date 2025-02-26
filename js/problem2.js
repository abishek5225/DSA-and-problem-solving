{
  /* Write a function that reverses an array without using .reverse().
  reverseArray([1, 2, 3, 4, 5]); // Output: [5, 4, 3, 2, 1]
  */
}

function reverseArray(){
    let arr=[1,2,3,4,5]
    let reversedArr=[];
    for(let i = arr.length -1; i>=0;i--){
        reversedArr.push(arr[i])
    }
    return reversedArr
}

console.log(reverseArray())