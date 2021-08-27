//Write a function that takes a fullname and returns a shorter version of the name.
//The function should return the abbreviated output by returning a string that con-
//tains the completed first name with the first letter of each subsequent name foll-
//wed by a period.
function abbFunction(fullname) {
    let array = fullname.split(' ');
    let result = array[0];
    for (let i = 1; i < array.length; i++) {
        result += ' ' + array[i][0];
    }
    result += '. ';
    return result;
}
//console.log(abbFunction('Judith Ugochi Iwuchi'));


//Write a function that takes a fullname and returns a shorter version of the name.
//The function should return the abbreviated output by returning a string that con-
//tains the first letter of each name followed by a period and the complete last name.
function abbreFunction(fullname) {
    let array = fullname.split(' ');
    let result = '';
    for (let i = 0; i < array.length - 1; i++) {
        array[i][0];
        result += array[i][0] + ' ';
       
    }
    result += '. ' + array[2];
    return result;
}
//console.log(abbreFunction('James King Thomson'));


//Write the implementation for a function firstMultiples of
//that returns n multiples of x that is divisible by y.
//The function should return the first 10 numbers that are
//all multiples of 2, but divisible by 5.
function impleFunction(numberOfMultiples, numbers, divisor) {
    let result = [];
    for (let i = 0; i < result; i++) {
        result = numbers * (divisor * (i - 1));
        result.push(result);
    }
    return result;
}
console.log(impleFunction(10, 2, 5));

//2 * 5 * 1 = 10
//2 * 5 * 2 = 20
//2 * 5 * 3 = 30
//2 * 5 * 4 = 40



//Given a word, return the count of vowels and consonants
//in the word in an object.
function cFunction(word) {
    let vowels = ['a', 'e', 'u', 'i', 'o']
}