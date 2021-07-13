
const chai = require('chai')
    , expect = chai.expect


const mul = require('../../local/mul')

describe('mul', () => {
    const a = 2
        , b = 3

    const expectResult = 6

    it('return mul result', () => {
        const result = mul(a, b)
        expect(result).to.be.equal(expectResult)
    })
})