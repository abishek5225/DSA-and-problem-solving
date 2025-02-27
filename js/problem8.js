//finding second highest number in an array

function secondHighest(arr) {
    let num= -Infinity;
    let secondhighnum= -Infinity;
    for(let i=1;i<arr.length;i++){
        if(arr[i]>num){
            secondhighnum= num
            num= arr[i];
        }else if(arr[i]<num && arr[i]>secondhighnum){
         secondhighnum = arr[i];
        }
    }
    return secondhighnum 
    
}
console.log(secondHighest([10,5,2,8,100,90,200,150])); 
