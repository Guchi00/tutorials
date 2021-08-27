function func(n, x, y) {
  const result = [];

  for (let i = 1; result.length < n; i++) {
    const multiple = i * x;
    if (multiple % y === 0) {
      result.push(multiple);
    }
  }

  return result;

}

console.log(func(5, 0, 1));
