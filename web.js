'use strict';

const express = require('express');
const validator = require('./app/validator');
const prime = require('./app/primeNumber');

// Constants
const PORT = 8000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Task prime numbers');
});

app.get('/calculate/:number', (req, res) => {
    const number = req.params.number;    
    if(validator.onlyDigits(number)){
        const value = prime.printPrimeNumber(number);
        console.log(value);
        res.send(value);
    }
    else{        
        res.send('Must be enter a digits number!');
    }        
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
