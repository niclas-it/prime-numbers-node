const prompt = require('prompt-sync')();
const prime = require('./app/primeNumber');
const validator = require('./app/validator');


const higherNumber = prompt('Please enter a digits number: ');
if(validator.onlyDigits(higherNumber)){
    const value = prime.printPrimeNumber(higherNumber);   
    console.log(value); 
}    
else{
    console.log('Must be enter a digits number!');
}
