//Bubble sort
function bubbleSort(arr){
    let n=arr.length;
    let swapped;

    for(let i =0;i<n-1;i++){
        swapped = false
        for(let j=0;j<n-1;i++){
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swapped = true;
            }
        }
        if(!swapped){
            break;
        }
    }
    return arr;
}
console.log("helloworld")
console.log(bubbleSort([5,3,8,4,2])) // [2,3,4,5,8]

