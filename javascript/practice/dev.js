
//function anything(num) {
    //if(num > 2) {
        //return true;
    //} else {
        //return false;
    //}
//}
//console.log(anything(5));


let string = 'hello'

function reverseString(word) {
    let result = '';
    for(let i = word.length - 1; i >= 0; i--) {
        result = result += word[i];
    }
    return result;
}
console.log(reverseString('hello'));



let word = 'manager'

function reverseTheWord(oneword) {
    let result = '';
    for(let i = oneword.length - 1; i >= 0; i--) {
        result = result += oneword[i];
    }
    return result;
}
console.log(reverseTheWord('manager'));


//note that the argument is the container that has the word
//or sentence to be reversed. so authomatically, it is the
//word or the sentence.
let sentence = 'I love my life'

function reverseSentence(sen) {
    let result = '';
    for(let i = sen.length - 1; i >= 0; i--) {
        result = result += sen[i];
    }
    return result;
}
console.log(reverseSentence('I love my life'));



let anotherWord = 'hey';

let array = anotherWord.split('');

array.reverse();

let rString = array.join('')
console.log(rString);

function reverseAnotherWord(anodaword) {
    let result = '';
    let array = anotherWord.split('');
    array.reverse();
    let rString = array.join('');
    result = result += array.join('');
    return result;
}
console.log(reverseAnotherWord('hey'));




let sentence2 = 'My name is Judith';

function mySentence2(sen2) {
    let result = '';
    let array = sentence2.split(' ');
    array.reverse();
    let rString = array.join(' ');
    result = result += array.join(' ');
    return result;
}
console.log(mySentence2('My name is Judith'));



//If stringrace is same as the whole process that happened
//return true, else return false.
let palidrome = 'racecar';

function isPalidrome(stringrace) {
    let rWord = stringrace.split('');
    rWord.reverse();
    let answer = rWord.join('');
    if (stringrace === answer) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalidrome('racecar'));


let objName = {
    name: 'Justine',
    age: 25
};
let prop = 'favouriteFood'

objName[prop] = 'Jellof Rice'
console.log(objName);
