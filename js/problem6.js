function factorial(num){
    if(num == 0) return 1//0*1=1
    let result = 1
    for(let i=num; i>=1;i++){
        result *=i
    }
    return result
}
console.log(factorial(3));
