//Create a function that will return an array of all 
//the even numbers from 1-20
function numFunction() {
    let array = [];
    for (let i = 0; i < 21; i++) {
        if(i === 2) {
            array.push(i);
        } else if (i === 4) {
            array.push(i);
        } else if (i === 6) {
            array.push(i);
        } else if (i === 8) {
            array.push(i);
        } else if (i === 10) {
            array.push(i);
        } else if (i === 12) {
            array.push(i);
        } else if (i === 14) {
            array.push(i);
        } else if (i === 16) {
            array.push(i);
        } else if (i === 18) {
            array.push(i);
        } else if (i === 20) {
            array.push(i);
        }
    }
    let result = array;
    return result;
}
console.log(numFunction());


//Create a function that will accept a number and return
//a message if its even or odd.
function messageFunction(num) {
    if (num % 2) {
        return '0'
    } else {
        return '1'
    }
    //console.log(num % 2);
}
console.log(messageFunction(14));