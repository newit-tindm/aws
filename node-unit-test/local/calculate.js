

const add = require('./add')
    , mul = require('./mul');

const calculate = (a, b) => mul(a, b) - add(b, a)

module.exports = calculate