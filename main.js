const calculator = require('./calculator');

const calculate = new calculator(3,5);

const result = calculate.add();
const answer = calculate.product();

console.log(result);
console.log(answer);