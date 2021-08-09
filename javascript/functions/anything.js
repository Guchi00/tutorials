//a = "you";

//console.log(a);
//let a = "me";

//function myFunction(numb1,numb2) {
//    console.log(numb1+numb2)
//};
//myFunction(3,2);
//myFunction(3,9);
//myFunction(10,3);
//myFunction(11,4);

//function ourFunction(man1,man2) {
   // console.log(man1-man2)
//};
//ourFunction(10,5);
//ourFunction(8,1);
//ourFunction(10,2);

//function girl(ugom,dear) {
 //   console.log(ugom, dear)
//};
//girl("ugochi","sweetheart");

//function toiletries(palmers,rollon) {
    //console.log(palmers + rollon)
//};
//toiletries("cream", "bodyarroma");

//function numerics(number1, number2) {
    //console.log(number1/number2)
//};
//numerics(5,2);
//numerics(10,2);

//function myFunction() {
   // console.log("I love Emma")
//};
//myFunction();

//function heyFunction() {
    //console.log("Kimmy has a good heart")
//};
//heyFunction();

//function anodaFunction() {
    //console.log("Learning coding is the best thing that has ever happened to me")
//};
//anodaFunction();

//function problemSolving(authenticate, authernative) {
    //console.log(authenticate+authernative)
//};
//problemSolving(13,10);


//Tast 1: Create a function that takes a string and
//reverses the character in it.

//for loop
//The accessing below are what i figured out in order
//to solove the task.

//example
//string[0]
//console.log(string[0]);
//string[1]
//console.log(string[1]);
//string[2]
//console.log(string[2]);
//string[3]
//console.log(string[3]);
//string[4]
//console.log(string[4]);

//let string = "hello";
//for(let i = 0; i < string.length; i++) {
   // console.log(string[i]);
//}

//forward loop
//let a = "hello";
//for(let i = 0; i < a.length; i++) {
    //console.log(a[i]);
//}

//backward loop
//let strB = "hello";
//for(let i = strB.length - 1; i >= 0; i--) {
    //console.log(strB[i]);
//}
let strB = "hello"
function reverseString(strB) {
    let result = '';

    for(let i = strB.length - 1; i >= 0; i--) {
       result = result += strB[i];
}
return result;

}
console.log(reverseString('hello'));




let str = 'hello'

let array = str.split('');
console.log(array);

array.reverse();
console.log(array);

let wantString = array.join('');
console.log(wantString);

