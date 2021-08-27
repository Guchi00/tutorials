function add() {
    const number1El = document.getElementById("name1");
    const number2El = document.getElementById("name2");
    const number
    const answerEl = document.getElementById("answer");

    const a = Number(number1El.value);
    const b = Number(number2El.value);
    const result = sum(a, b); //this line sum the above getelement name1$2 
    //inorder to get a result, giving it a different variable

    answerEl.innerHTML = result;  // while this line which is the third get element 
    //displays the result
}

function sum(x, y, z) {
    return x + y + z;
}

function substrac() {
    const number1El = document.getElementById("name1");
    const number2El = document.getElementById("name2");
    const number3El = document.getElementById("name3");
    const answerEl = document.getElementById("answer");

    const a = Number(number1El.value);
    const b = Number(number2El.value);
    const c = Number(number3El.value);
    const total = sub(a, b, c);

    answerEl.innerHTML = total;
}

function sub(x, y, z) {
    return x - y - z;
}

function multiply() {
    const number1El = document.getElementById("name1");
    const number2El = document.getElementById("name2");
    const number3El = document.getElementById("name3");
    const answerEl = document.getElementById("answer");

    const a = Number(number1El.value);
    const b = Number(number2El.value);
    const c = Number(number3El.value);
    const total = multi(a, b, c);

    answerEl.innerHTML = total;
}

function multi(x, y, z) {
    return  x * y * z;
}

function divide() {
    const number1El = document.getElementById("name1");
    const number2El = document.getElementById("name2");
    const number3El = document.getElementById("name3");
    const answerEl = document.getElementById("answer");

    const a = Number(number1El.value);
    const b = Number(number2El.value);
    const c = Number(number3El.value);
    const total = div(a, b, c);
    console.log(total);

    answerEl.innerHTML = total;
}

function div(x, y, z) {
    return  x / y / z;
}
