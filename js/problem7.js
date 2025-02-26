function high(n){
    let num =n[0]
    for(let i=1;i<n.length;i++){    
        if(n[i]>num){
            num =n[i]
        }
    }
    return num
}
console.log(high([1, 2, 3, 4, 5]));

console.log("running")