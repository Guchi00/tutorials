function add() {
    const number1El = document.getElementById("name1");
    const number2El = document.getElementById("name2");
    const answerEl = document.getElementById("answer");

    const a = Number(number1El.value);
    const b = Number(number2El.value);
    const result = sum(a, b); //this line sum the above getelement name1$2 
    //inorder to get a result, giving it a different variable

    answerEl.innerHTML = result;  // while this line which is the third get element 
    //displays the result
}

function sum(x, y) {
    return x + y;
}
