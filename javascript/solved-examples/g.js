function func(word) {
  word = word.toLowerCase();

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const consonants = Array.
    from({ length: 26 }, (i, v) => String.fromCharCode('a'.charCodeAt(0) + v))
    .filter(i => !vowels.includes(i));

  const result = {
    consonants: 0,
    vowels: 0
  };


  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      result.vowels++;
    } else if (consonants.includes(word[i])) {
      result.consonants++;
    }
  }

  return result;
}

console.log(func('hELLlo...'));
// console.log(String.fromCharCode('a'.charCodeAt(0)))
