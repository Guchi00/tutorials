//Write a function that takes a fullname and returns a shorter version of the name.
//The function should return the abbreviated output by returning a string that con-
//tains the completed first name with the first letter of each subsequent name foll-
//wed by a period.
function abbreviatedFun(fullname) {
    let array = fullname.split(' ');
    let result = array[0];
    for (i = 1; i < array.length; i++) {
        result += ' ' + (array[i])[0];
    }
    result += '.';
    return result;
  
}
console.log(abbreviatedFun('jonny just come'));

//Write a function that takes a fullname and returns a shorter version of the name.
//The function should return the abbreviated output by returning a string that con-
//tains the first letter of each name followed by a period and the complete last name.
function abbreFunction(fullname) {
    let array = fullname.split(' ');
    let result = '';
    for (let i = 0; i < array.length - 1; i++) {
        (array[i])[0];
        result += (array[i])[0] + ' ';
        
    }
    result += '. ' + array[2];
    return result;
}
console.log(abbreFunction('samuel nelson jackson'));




//Given a word, return the count of vowels and 
//consonants in the word in an object
function countFunction(string) {
    let anArray = [];
    let object = {};
    for (let i = 0; i < string.length; i++) {
        if (i === 'o') {
            anArray.push([i]);
            object = {...[0, 1, 2, 3, 4,] }
        } else if (i === 'u') {
            anArray.push([i]);
            object = {...[0, 1, 2, 3, 4,] }
        } else if (i === 'e') {
            anArray.push([i]);
            object = {...[0, 1, 2, 3, 4,] }
        } else if (i === 'a') {
            anArray.push([i]);
            object = {...[0, 1, 2, 3, 4,] }
        } else if (i === 'i') {
            anArray.push([i]);
            object = {...[0, 1, 2, 3, 4,] }
        } else {
            anArray.push([i]);
            object = {...[0, 1, 2, 3, 4,] }
        }
       
    }    
    //return object;
}
//console.log(countFunction('hello'));


//Given a word, return the vowels and consonants in the word
//in an object.
function letFunction(letters) {
    let myArray = [];
    let object = {};
    for (let i = 0; i < letters.length; i++) {
        myArray.push(letters[i]);
        object = {...['s', 't', 'a', 't', 'm', 'e', 'n', 't']};
    }
    //return object;
}
//console.log(letFunction('statement'));


//Given a array of numbers, write a function classifyingNumbers
//that returns a category for each number in an object.
function classifyingNumbers() {
    let array = [1, 2, 3, 4, 5];
    let object = {...[1, 2, 3, 4, 5]};
    return object;
}
//console.log(classifyingNumbers());

var arr = [
    [1,2], [3,4], [5,6]
  ];
  var total = '';
  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
        //total =+ arr[i][j]
      //console.log(total);
    }
  };




