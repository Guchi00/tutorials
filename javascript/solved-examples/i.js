function func(numbers) {
  const result = {
    odd: [],
    even: [],
    units: [],
    tens: [],
    hundreds: [],
    other: []
  };

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    if (currentNumber % 2 === 1) {
      result.odd.push(currentNumber);
    } else if (currentNumber % 2 === 0) {
      result.even.push(currentNumber);
    }
    
    if (currentNumber > 0 && currentNumber < 10) {
      result.units.push(currentNumber);
    } else if (currentNumber > 9 && currentNumber < 100) {
      result.tens.push(currentNumber);
    } else if (currentNumber > 99 && currentNumber < 1000) {
      result.hundreds.push(currentNumber);
    } else {
      result.other.push(currentNumber);
    }
  }

  return result;

}

console.log(func([1, 2, 3, 4, 5, 6, 7, 8, 9]));

