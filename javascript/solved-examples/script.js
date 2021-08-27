const res = document.getElementById('result');

function increment() {
  res.textContent = Number(res.textContent) + 1;
}

function decrement() {
  res.textContent = Number(res.textContent) - 1;
}

