
function myFunc() {
  const num1El = document.getElementById('num1');
  const num2El = document.getElementById('num2');
  const resEl = document.getElementById('res');

  const a = Number(num1El.value);
  const b = Number(num2El.value);
  const result = sum(a, b);

  resEl.innerHTML = result;

}

function sum(x, y) {
  return x + y;
}

function minus(x, y) {
  return x - y;
}

function times(x, y) {
  return x * y;
}

function quotient(x, y) {
  return x / y;
}

function add() {
  const num1El = document.getElementById('num1');
  const num2El = document.getElementById('num2');
  const resEl = document.getElementById('res');

  const a = Number(num1El.value);
  const b = Number(num2El.value);
  const result = sum(a, b);

  resEl.innerHTML = result;

}

function subtract() {
  const num1El = document.getElementById('num1');
  const num2El = document.getElementById('num2');
  const resEl = document.getElementById('res');

  const a = Number(num1El.value);
  const b = Number(num2El.value);
  const result = minus(a, b);

  resEl.innerHTML = result;
  
}

function multiply() {
  const values = getValues();
  const result = times(values.firstValue, values.secondValue);

  resEl.innerHTML = result;
  
}

function divide() {
  const values = getValues();
  const result = quotient(values.firstValue, values.secondValue);

  resEl.innerHTML = result;
}

function getValues() {
  const num1El = document.getElementById('num1');
  const num2El = document.getElementById('num2');

  const x = Number(num1El.value);
  const y = Number(num2El.value);


  return { firstValue: x, secondValue: y };
}
