//largest num from array [3,7,2,9,5]

function highestNum(num){
    let largestnum = num[0];

    for(let i=1;i< num.length;i++){
        if(num[i]>largestnum){
            largestnum=num[i];
        }
    }
    return largestnum;
}
console.log(highestNum([3, 7, 2, 9, 5]));

console.log("running")