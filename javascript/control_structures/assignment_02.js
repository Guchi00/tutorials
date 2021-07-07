const a = 17;
const b = 22;
const operator = '*';

let result;

if (operator === '+') {
  result = a + b;
  console.log(result);

} else if (operator === '-') {
  result = a - b;
  console.log(result);

} else if (operator === "*") {
  result = a * b;
  console.log(result);

} else if (operator === '/') {
  result = a / b;
  console.log(result);

} else {
  console.log('unknown operator entered')
}


