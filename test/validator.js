const chai = require('chai')
const expect = chai.expect

const validator = require('../app/validator');


describe("validate errors", () => {
    
    it("should be true for only digits: 10 ", ()=> {        
        expect(validator.onlyDigits(10)).to.be.true
	})

    it("should be true for only digits: '100' ", ()=> {        
        expect(validator.onlyDigits('100')).to.be.true
	})

    it("should be false for chars: lorem ipsum", ()=> {        
        expect(validator.onlyDigits('lorem ipsum ...')).to.be.false
	})

    it("should be false for alphanumeric", ()=> {        
        expect(validator.onlyDigits('Hello1044 World')).to.be.false
	})

    it("should be false for empty", ()=> {        
        expect(validator.onlyDigits()).to.be.false
	})

})