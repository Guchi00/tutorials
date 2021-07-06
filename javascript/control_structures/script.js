(function () {
  const pin = prompt('Enter your 4 digit PIN to continue: ');
  const correctPin = '1234';

  if (pin === correctPin) {
    alert(`
    Welcome!

    1. Withdrawal
    2. Check Balance
    3. Transfer money
    4. Data Topup
    `);
  } else {
    const pin = prompt('Incorrect PIN! Enter your 4 digit PIN to continue: ');
  }
})();
