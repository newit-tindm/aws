
const chai = require('chai')
    , expect = chai.expect


const add = require('../../local/add')

describe('add', () => {
    const a = 1
        , b = 2

    const expectResult = 3

    it('return add result', () => {
        const result = add(a, b)
        expect(result).to.be.equal(expectResult)
    })
})