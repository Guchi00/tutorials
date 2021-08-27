
function func(amount) {
  const bills = [100, 20, 9, 1];

  let change = amount;
  let res = [];

  for (let i = 0; i < bills.length; i++) {
    const billCount = Math.floor(change / bills[i]);
    res.push(billCount);
    change -= billCount * bills[i];
  }

  return res;
}

console.log(func(9876));

