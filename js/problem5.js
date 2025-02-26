function isPrime(num){
    if(num <= 1) {
        console.log(`${num} is not prime number`);
    }
    for(let i=2; i <=num;i++){
        if(num% i===0){
            console.log(`${num} is not prime number`);
        }else{
            console.log(`${num} is Prime number`);
        }
    }
}
console.log(isPrime(2))
