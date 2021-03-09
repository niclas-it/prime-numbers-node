const chai = require('chai')
const expect = chai.expect

const prime  = require('../app/primeNumber');

describe("return prime number desc.", () => {

	it("should return string", ()=> {
		expect(prime.printPrimeNumber(15)).to.be.a('string')        
	})

    it("should result string descending order", ()=> {
		expect(prime.printPrimeNumber('30')).to.equal('29, 23, 19, 17, 13, 11, 7, 5, 3, 2')        
	})

})

