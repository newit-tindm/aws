

const chai = require('chai')
    , expect = chai.expect
    , sinon = require('sinon')
    , proxyquire = require('proxyquire')


describe('calculate', () => {

    const a = 3
        , b = 4

    describe('with proxyquire', () => {

        const addStub = sinon.stub().returns(3)
            , mulStub = sinon.stub().returns(9)

        const expectResult = 6 // 9 - 3

        const calculate = proxyquire('../../local/calculate', {
            './add': addStub,
            './mul': mulStub
        })

        it('return result from mul and add', () => {
            const result = calculate(a, b)

            expect(result).to.be.equal(expectResult)
        })
    })

    describe('without proxyquire', () => {

        const expectResult = 5 // 3 * 4 - (4 + 3)

        const calculate = require('../../local/calculate')

        it('return result from a and b', () => {
            const result = calculate(a, b)

            expect(result).to.be.equal(expectResult)
        })
    })

})