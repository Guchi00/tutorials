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
//console.log(numFunction());


//Create a function that will accept a number and return
//a message if its even or odd.
function messageFunction(num) {
   let a = num % 2;
    if (a === 0) {
        return 'even number';
    } else {
        return 'odd number';
    }
}
//console.log(messageFunction(18));



//Create a function that compares two numbers and
//return the greater than.
function theGreaterFun(numb1, numb2) {
    if (numb1 > numb2) {
        return 'numb1'
    } else {
        return 'numb2'
    }
}
//console.log(theGreaterFun(13, 17));



//Create a function that accepts age and print out a success
//message if age is 18 or greater than, else a failure message.
function theAgeFunction(age) {
    if (age >= 18) {
        return 'Eligible for driving licence';
    } else if (age >= 17) {
        let a = 18 - age;
        let b = 'wait till ';
        let c = ' year';
        let z = b + a + c;
        let result = z;
        return z;
    } else {
        return 'Not old enough to obtain a driving licence';
    }
}
console.log(theAgeFunction(17));


//Create a function that calculates, it accepts two numbers and a string.
function calculateFunction(operate, num, num2) {
    if (operate === 'addition') {
        return num + num2;
    } else if (operate === 'multiplication') {
        return num * num2;
    } else if (operate === 'division') {
        return num / num2;
    } else if (operate === 'subtraction') {
        return num - num2;
    }
}
console.log(calculateFunction('addition', 20, 2));



//Create a function that counts 1 - 10.
function countFunction() {
    for (let i = 0; i < 10; i++) {
        console.log(i + 1);
    }
}
console.log(countFunction());


//Create a function that reverse the number 1 - 10
function reverseNumberFun() {
    for (let i = 10; i > 0; i--) {
        console.log(i);
    }
}
console.log(reverseNumberFun());


//Create a function that reverses a word
function reverseWordFun(string) {
    for (let i = string.length - 1; i >= 0; i--) {
        console.log(string[i]);
    }
}
console.log(reverseWordFun('level'));


//Create a function that reverses a sentence using split.
function reverseSenFunction(alphabet) {
    let array = alphabet.split(' ');
    array.reverse();
    let result = array.join(' ')
    return result;
}
console.log(reverseSenFunction('food is ready'));



//Create a function that accepts an arguement and print
//and print out the number of character in a string.
function charaFunction(many) {
    let result = many.length;
    return result;
}
console.log(charaFunction('ugoo'));

  
//Create a greeting function that accepts a number and returns a message.
function greetingFun(time) {
    if (time >= 0 && time <= 11) {
        return 'Good morning';
    } else if (time >= 12 && time <= 16) {
        return 'Good afternoon';
    } else if (time >= 17 && time <= 20) {
        return 'Good evening';
    } else if (time >= 21 && time <= 24) {
        return 'Good night';
    } else {
        return 'Not a time of greeting';
    }
}
console.log(greetingFun(-1));



//Create a function that accepts a string and returns the
//number of vowel in it.
function vowelFunction(different) {
    let myArray = [];
   for (let i = 0; i < different.length; i++) {
       if (different[i] === 'o') {
           myArray.push(different[i]);
       } else if (different[i] === 'u') {
           myArray.push(different[i]);
       } else if (different[i] === 'e') {
           myArray.push(different[i]);
       } else if (different[i] === 'i') {
           myArray.push(different[i]);
       } else if (different[i] === 'a') {
           myArray.push(different[i]);
       }
   }
   let result = myArray.length;
   return result;
}
console.log(vowelFunction('management'));


