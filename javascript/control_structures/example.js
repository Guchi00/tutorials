const lightHours = 18;
const waterIsConstant = false;
const isSecure = false;
const isStoryBuilding = true;


if (lightHours >= 20) { //check: false
  console.log('Good choice.');

} else if (waterIsConstant === true) { //check: false
  console.log('Manageable');

} else if (isSecure === true) { //check: false
  console.log('Not too bad');

} else if (isStoryBuilding === true) { //check: true
  console.log('Hmmm...Let me get back to you next week');
  
} else {
  console.log('Let\'s check out another apartment');
}
