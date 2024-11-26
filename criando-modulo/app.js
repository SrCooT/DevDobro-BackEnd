const  {calculateAverage, sum,somer} = require('./average');


const numbers = [2, 4, 6, 8, 10];
const average = calculateAverage(numbers);

console.log(`A média dos números ${numbers} é ${average}.`);

const number1 = 5;
const number2 = 20;
const result = sum(number1,number2);
console.log(result);
const number10 = 20;
const number50 = 120;
const resultado = somer(number10,number50);
console.log(resultado);


