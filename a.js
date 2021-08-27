const balanced = string => {
  console.log(string)
  console.log([...string])
  if (string === '') return true;
  const set = [...new Set(string)];
  const arr = [...string];
  const wildcard = set.indexOf('*') !== -1;
  console.log(set);
  if (set.length === 1) return true;
  
  const obj = Object.fromEntries(set.map(i => [i, 0]));
  

  arr.forEach(item => {
    obj[item]++;
  });
  console.log(obj);

  const sorted = Object.values(obj).sort((a, b) => a - b);
  console.log(sorted);

  if (wildcard) {
    const x = Object.entries(obj).filter(i => i[0] !== '*').map(i => i[1]).sort((a, b) => a - b);
    const len = x.length;
    const max = x[len - 1];
    const min = x[0];
    const wild = obj['*'];

    if (len === 52 && wild > 0 && wild % 52 !== 0) return false;
   
    if (min === max && (wild === len || (wild > 0 && wild % max === 0))) return true;
    const totalOffset = x.map(i => max - i).reduce((acc, curr) => acc + curr);
    console.log(totalOffset, max, wild);
    if (totalOffset > wild) return false;
    if (totalOffset === wild) return true;
    console.log('1>>>>>')
    if ((wild - totalOffset) % max  === 0) return true;
    console.log('2>>>>>')
    if ((wild - totalOffset) % len === 0) return true;
    console.log('3>>>>>')
    if (((wild - totalOffset - max) % (len + 1)) === 0) return true;
    console.log('4>>>>>')
    return c(len, max, wild - totalOffset);

  } else {
    if (sorted[0] === sorted[sorted.length - 1]) return true;
  }

  return false;
};

function c(count, max, val) {
  console.log(count, max, val)
  if (val < count) {
    if (val % max === 0) return true;
    else return false;
  }
  if ((val % count) === 0 || (val % max) === 0) return true;
  return c(++count, max, val - max);
}

const a = balanced('a*aa**z**z*');
console.log(a)
