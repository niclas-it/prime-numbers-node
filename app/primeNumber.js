
exports.printPrimeNumber = (higherNumber) => {

    const number = parseInt(higherNumber);        
    const primes = [];               
    for (let i = number; i >= 2; i--) {
        let flag = 0;
    
        // check prime number
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
    
        // if gt 1 and not divisible by other numbers
        if (i > 1 && flag == 0) {
            primes.push(i);
        }
    }   
    return primes.join(', ');    
    
}
