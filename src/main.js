/** @module sedraCodeUtil */
/**
 * Wow semivowel
 * @constant
 * @type { string }
 */
export const wow = 'O';

/**
 * Yod semivowel
 * @constant
 * @type { string }
 */
export const yod = ';';

/**
 * Sedra consonants
 * @constant
 * @type { string[] }
*/
export const consonants = Object.freeze([
  'A',
  'B',
  'G',
  'D',
  'H',
  wow,
  'Z',
  'K',
  'Y',
  yod,
  'C',
  'L',
  'M',
  'N',
  'S',
  'E',
  'I',
  '/',
  'X',
  'R',
  'W',
  'T'
]);

/**
 * Sedra vowels
 * @constant
 * @type { string[] }
*/
export const vowels = Object.freeze(['a', 'o', 'e', 'i', 'u']);

/**
 * Sedra/CAL diacritic characters:
 * * __'__ dot above, Qushaya
 * * __,__ dot below, Rukkakha
 * * **_** line under
 * * __*__ Seyame
 * @constant
 * @type { string[] }
*/
export const diacritics = Object.freeze(["'", ',', '_', '*']);

/**
 * Vowels and diacritics: used for consonantal only mapping
 * @constant
 * @type { Array.<string> }
 */
export const dotting = Object.freeze(vowels.concat(diacritics));

/**
 * Is character c a Sedra 3 consonant?
 * @param { string } c input character
 * @returns { boolean } true if c is Sedra 3 consonant
 */
export const isConsonant = c => consonants.indexOf(c) > -1;

/**
 * Is character c a Sedra 3 vowel?
 * @param { string } c input character
 * @returns { boolean } true if c is Sedra 3 vowel
 */
export const isVowel = c => vowels.indexOf(c) > -1;

/**
 * Is character c a diacritic? Same characters used for both Sedra 3 and CAL.
 * @param { string } c input character
 * @returns { boolean } true if c is a diacritic
 */
export const isDiacritic = c => diacritics.indexOf(c) > -1;

/**
 * Returns true if c is dotting character
 * @param { string } c input character
 * @returns { boolean } true if c is dotting
 */
export const isDotting = c => dotting.indexOf(c) > -1;

/**
 * Remove dotting (vowels and diacritics), leaving consonantal word only.
 * @param { string } word input word to be processed
 * @returns { string } consonantal word
 */
export const removeDotting = word => {
  if (!word) {
    return word;
  }

  let hasDotting = false;
  const stack = [];
  for (let i = 0, len = word.length; i < len; i++) {
    const c = word.charAt(i);
    if (isDotting(c)) {
      hasDotting = true;
    } else {
      stack.push(c);
    }
  }
  return hasDotting ? stack.join('') : word;
};
