function isPrime(n) {
    if (n < 2) return false; 
    for (let i = 2; n>i; i++) {
        if (n % i === 0) return `${n} is not a prime num`; 
    }
    return `${n} is prime number`;
}


console.log(isPrime(20));  

