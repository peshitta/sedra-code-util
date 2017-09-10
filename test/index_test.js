import { ok } from 'assert';
import {
  isConsonant,
  isVowel,
  isDiacretic
} from '../build/sedra-code-util';

describe('Sedra', () => {
  describe('Util', () => {
    it('Is Sedra Consonant', () => {
      ok(isConsonant('A'), 'isConsonant');
      ok(isConsonant(';'), 'isConsonant');
      ok(isConsonant('/'), 'isConsonant');
      ok(isConsonant('E'), 'isConsonant');
      ok(isConsonant('I'), 'isConsonant');
      ok(!isConsonant('i'), 'isConsonant');
      ok(!isConsonant('g'), 'isConsonant');
      ok(!isConsonant('u'), 'isConsonant');
    });
    it('Is Sedra vowel', () => {
      ok(isVowel('a'), 'isVowel');
      ok(isVowel('o'), 'isVowel');
      ok(isVowel('e'), 'isVowel');
      ok(isVowel('i'), 'isVowel');
      ok(isVowel('u'), 'isVowel');
      ok(!isVowel('E'), 'isVowel');
      ok(!isVowel('O'), 'isVowel');
      ok(!isVowel('A'), 'isVowel');
      ok(!isVowel('I'), 'isVowel');
      ok(!isVowel('U'), 'isVowel');
      ok(!isVowel(''), 'isVowel');
    });
  });
});

describe('Diacretics', () => {
  it('isDiacretic', () => {
    ok(isDiacretic("'"), 'isDiacretic');
    ok(isDiacretic(','), 'isDiacretic');
    ok(isDiacretic('*'), 'isDiacretic');
    ok(isDiacretic('_'), 'isDiacretic');
    ok(!isDiacretic(''), 'isDiacretic');
    ok(!isDiacretic(' '), 'isDiacretic');
  });
});
