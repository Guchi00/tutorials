/*
  Control Structures

  These provide us with the means to manage logic 
  flow in our programs
*/

/*
  Algorithm
  1. Request pin from user.
  2. Check if pin is correct
  3. if pin is correct, then display ATM menu to user.
  Else go return to step 1.

*/
const age = 25;

if (age >= 21) {
  console.log('You are an adult. Please enter!');
} else if (age >= 18) {
  console.log('Sorry bud. Check back in a few years\' time');
} else {
  console.log('Please go home. You\'re underage');
}


