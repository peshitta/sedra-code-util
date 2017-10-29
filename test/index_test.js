const { ok, strictEqual } = require('assert');
const {
  isConsonant,
  isVowel,
  isDiacritic,
  isDotted,
  removeDotting
} = require('../build/sedra-code-util');

describe('Sedra', () => {
  describe('Util', () => {
    it('Is Sedra Consonant', () => {
      ok(isConsonant('A'), 'A isConsonant');
      ok(isConsonant(';'), '; isConsonant');
      ok(isConsonant('/'), '/ isConsonant');
      ok(isConsonant('E'), 'E isConsonant');
      ok(isConsonant('I'), 'I isConsonant');
      ok(!isConsonant('i'), 'i isConsonant');
      ok(!isConsonant('g'), 'g isConsonant');
      ok(!isConsonant('u'), 'u isConsonant');
    });
    it('Is Sedra vowel', () => {
      ok(isVowel('a'), 'a isVowel');
      ok(isVowel('o'), 'o isVowel');
      ok(isVowel('e'), 'e isVowel');
      ok(isVowel('i'), 'i isVowel');
      ok(isVowel('u'), 'u isVowel');
      ok(!isVowel('E'), 'E isVowel');
      ok(!isVowel('O'), 'O isVowel');
      ok(!isVowel('A'), 'A isVowel');
      ok(!isVowel('I'), 'I isVowel');
      ok(!isVowel('U'), 'U isVowel');
      ok(!isVowel(''), "'' isVowel");
    });
  });
});

describe('diacritics', () => {
  it('isDiacritic', () => {
    ok(isDiacritic("'"), "' isDiacritic");
    ok(isDiacritic(','), ', isDiacritic');
    ok(isDiacritic('*'), '* isDiacritic');
    ok(isDiacritic('_'), '_ isDiacritic');
    ok(!isDiacritic(''), "'' isDiacritic");
    ok(!isDiacritic(' '), "' ' isDiacritic");
  });
});

describe('Sedra', () => {
  describe('isDotted', () => {
    it('Check consonantal and vocalised', () => {
      const word = 'DXSR;A-DI;L;IOS';
      const wordDotted = isDotted(word);
      const vocalisedDotted = isDotted("D'XeSaRi;aA-D,I,i;Li;I'oOS");
      strictEqual(wordDotted, false, 'isDotted consonant only');
      strictEqual(vocalisedDotted, true, 'isDotted vocalised');
    });
    it('Word with (wu) => (uO) mapping', () => {
      const word = isDotted('LBELDBB;CON');
      const wordExpected = false;
      const vocalised = isDotted("LaB,EeLD'B,oB,a;C'uON");
      const vocalisedExpected = true;
      strictEqual(word, wordExpected, 'isDotted_wu consonant');
      strictEqual(vocalised, vocalisedExpected, 'isDotted_wu vocalised');
    });
    it('Blank word returns blank', () => {
      const word = isDotted('');
      const expected = false;
      strictEqual(word, expected, 'isDotted_blank');
    });
  });
});

describe('removeDotting', () => {
  it('Check consonantal and vocalised', () => {
    const word = 'DXSR;A-DI;L;IOS';
    const expected = removeDotting(word);
    const vocalised = removeDotting("D'XeSaRi;aA-D,I,i;Li;I'oOS");
    strictEqual(word, expected, 'removeDotting consonant only');
    strictEqual(vocalised, expected, 'removeDotting vocalised');
  });
  it('Word with (wu) => (uO) mapping', () => {
    const word = removeDotting('LBELDBB;CON');
    const wordExpected = 'LBELDBB;CON';
    const vocalised = removeDotting("LaB,EeLD'B,oB,a;C'uON");
    const vocalisedExpected = wordExpected;
    strictEqual(word, wordExpected, 'removeDotting_wu consonant');
    strictEqual(vocalised, vocalisedExpected, 'removeDotting_wu vocalised');
  });
  it('Blank word returns blank', () => {
    const word = removeDotting('');
    const wordExpected = '';
    strictEqual(word, wordExpected, 'removeDotting_blank');
  });
});
