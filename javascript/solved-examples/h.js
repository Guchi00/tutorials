function func(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const consonants = Array.from({ length: 26 }, (i, v) => String.fromCharCode('a'.codePointAt(0) + v)).filter(i => !vowels.includes(i));

  const result = {
    consonants: [],
    vowels: []
  };

  for (let i = 0; i < word.length; i++) {
    const character = word[i];
    const charLower = character.toLowerCase();
    if (vowels.includes(charLower)) {
      result.vowels.push(character);
    } else if (consonants.includes(charLower)) {
      result.consonants.push(character);
    }
  }

  return result;

}

console.log(func('helLOo'));
