import { ok } from 'assert';
import { isConsonant, isVowel, isDiacritic } from '../build/sedra-code-util';

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
