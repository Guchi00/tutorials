//Create a function that accepts two numbers 
//and returns the greater of the two.


function theGreaterNumber(numb1, numb2) {
    if (numb1 < numb2) {
        return numb2;
    } else {
        return numb1;
    }
}
//console.log(theGreaterNumber(2,10));


//Create a function that accepts the age and prints 
//out a success message if age is 18 or greater, 
//else it prints out a failure message.

function ageIsGreaterThan(age) {
    if (age >= 18) {
        return "Enter you have come of age"
    } else {
        return "Go and return next year"
    }
}
//console.log(ageIsGreaterThan(19));


function ageFunc(age) {
    if (age >= 18) {
        return "Come in you are an adult"
    } else if (age >= 16) {
        let a = 19 - age;
        let x = "come back in "
        let z = " years time"

        let d = x + a + z;
        return d
    } else {
        return "You have no business here"
    }
}
//console.log(ageFunc(15));

let a = "cow "
let b = 10;
let c = " to eat"

let d = a + b + c;
//console.log(d);


function myAgeFunction(age) {
    if (age >= 25) {
        return "legible for mariage"
    } else (age <= 24); {
        let a = 25 - age;
        let b = "not suitable for marriage wait to "
        let c = " years time "

        let d = b + a + c;
        return d;
    }
}
//console.log(myAgeFunction(23));

//create a function that calculates,
//it accepts two numbers and a string,as an arguement 
// (three arguements/parameters)
// func(3, 4, 'subtraction');
// -1
// func(12, 4, 'division');
// 3

function calFunction(numb1, numb2, operator) {
    if (operator === "addition") {
        return numb1 + numb2;
    } else if (operator === "subtraction") {
        return numb1 - numb2;
    } else if (operator === "division") {
        return numb1 / numb2;
    } else if (operator === "multiplication") {
        return numb1 * numb2;
    } else {
        return "operator not recognized";
    }
}

const result = calFunction(12, 3, "multiplication");
//console.log(result);


//Build a function that counts to 10. like it prints out 1 - 10

function countFunction() {
    for(let i = 0; i < 10; i++) {
        //console.log(i + 1);
    }
    
}
//countFunction();

function reverseNumber() {
    for (let i = 10; i > 0; i--) {
        console.log(i);
    }
}
//reverseNumber();


function reverseAWord(word) {
    let result = '';
    for (let i = word.length; i > 0; i--) {
        result += word[i - 1];
    }
    return result;
}
//console.log(reverseAWord('hello'));


//Create a greeting function that accepts a string
//parameter and returns a greeting.(either morning, aft)

function greetingFunction(time) {
    if (time >= 0 && time <= 11) {
        return "Good morning";
    } else if (time >= 12 && time <= 16) {
        return "Good afternoon";
    } else if (time >= 17 && time <= 19) {
        return "Good evening";
    } else if (time >= 20 && time <= 23) {
        return "Good night";
    } else {
        return "Invalid Time";
    }
}
//console.log(greetingFunction(10));


//Create a function that reverses a string.

function reverseSentence(sentence) {
    let result = "";
    for (let i = sentence.length - 1; i >= 0; i--) {
        result += sentence[i];
    }
    return result;
}
//console.log(reverseSentence("My name is Ugochi"));


function myFunc(string) {
    let array = string.split(' ');
    array.reverse();        
    let result = array.join(' ');
    return result;
}
//console.log(myFunc('Phone is an electronic device'));


//Create a function that prints out the number of character in a string.
//It accepts the string as an arguement.

function numberOfCharacter(string) {
    let result = string.length;
    return result;
}  
//console.log(numberOfCharacter('abcdefghijk'));

//Create a function that accepts a string and returns the number of vowels in it.

function numberOfVowel(word) {
    let anArray = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] === 'a') {
            anArray.push(word[i]);
        } else if (word[i] === 'e') {
            anArray.push(word[i]);
        } else if (word[i] === 'i') {
            anArray.push(word[i]);
        } else if (word[i] === 'u') {
            anArray.push(word[i]);
        } else if (word[i] === 'o') {
            anArray.push(word[i]);
        }
    }
    let result = anArray.length;
    return result;
}
console.log(numberOfVowel('strangers'));