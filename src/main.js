/** @module sedraCodeUtil */
import { hasDotting, clearDotting, getSort } from 'aramaic-mapper';

/**
 * Sedra consonant name to value map
 * @constant
 * @type { Object.<string, string> }
*/
export const consonantsByName = Object.freeze(
  Object.create(null, {
    alaph: { value: 'A', enumerable: true },
    beth: { value: 'B', enumerable: true },
    gamal: { value: 'G', enumerable: true },
    dalath: { value: 'D', enumerable: true },

    he: { value: 'H', enumerable: true },
    waw: { value: 'O', enumerable: true },
    zayn: { value: 'Z', enumerable: true },

    heth: { value: 'K', enumerable: true },
    teth: { value: 'Y', enumerable: true },
    yod: { value: ';', enumerable: true },

    kaph: { value: 'C', enumerable: true },
    lamadh: { value: 'L', enumerable: true },
    mim: { value: 'M', enumerable: true },
    nun: { value: 'N', enumerable: true },

    semkath: { value: 'S', enumerable: true },
    e: { value: 'E', enumerable: true },
    pe: { value: 'I', enumerable: true },
    sadhe: { value: '/', enumerable: true },

    qoph: { value: 'X', enumerable: true },
    resh: { value: 'R', enumerable: true },
    shin: { value: 'W', enumerable: true },
    taw: { value: 'T', enumerable: true }
  })
);

const l = consonantsByName;
/**
 * Sedra consonants
 * @constant
 * @type { string[] }
*/
export const consonants = Object.freeze([
  l.alaph,
  l.beth,
  l.gamal,
  l.dalath,

  l.he,
  l.waw,
  l.zayn,

  l.heth,
  l.teth,
  l.yod,

  l.kaph,
  l.lamadh,
  l.mim,
  l.nun,

  l.semkath,
  l.e,
  l.pe,
  l.sadhe,

  l.qoph,
  l.resh,
  l.shin,
  l.taw
]);

/**
 * Sedra vowel name to value map
 * @constant
 * @type { Object.<string, string> }
*/
export const vowelsByName = Object.freeze(
  Object.create(null, {
    pthaha: { value: 'a', enumerable: true },
    zqapha: { value: 'o', enumerable: true },
    rbasa: { value: 'e', enumerable: true },
    hbasa: { value: 'i', enumerable: true },
    esasa: { value: 'u', enumerable: true }
  })
);

const v = vowelsByName;
/**
 * Sedra vowels
 * @constant
 * @type { string[] }
*/
export const vowels = Object.freeze([
  v.pthaha,
  v.zqapha,
  v.rbasa,
  v.hbasa,
  v.esasa
]);

/**
 * Sedra/CAL diacritic name map
 * 1. qushaya: __'__ - dot above
 * 2. rukkakha: __,__ - dot below
 * 3. lineaOccultans: **_** - linea occultans
 * 4. seyame: __*__ - seyame, rebwe
 * @constant
 * @type { Object.<string, string> }
*/
export const diacriticsByName = Object.freeze(
  Object.create(null, {
    qushaya: { value: "'", enumerable: true },
    rukkakha: { value: ',', enumerable: true },
    lineaOccultans: { value: '_', enumerable: true },
    seyame: { value: '*', enumerable: true }
  })
);

const d = diacriticsByName;
/**
 * Sedra/CAL diacritic characters:
 * * __'__ dot above, Qushaya
 * * __,__ dot below, Rukkakha
 * * **_** line under
 * * __*__ Seyame
 * @constant
 * @type { string[] }
*/
export const diacritics = Object.freeze([
  d.qushaya,
  d.rukkakha,
  d.lineaOccultans,
  d.seyame
]);

/**
 * CAL to ordinal ASCII value. Used for sorting:
 * a b c d e f g h i j k l m n o p q r s t u v
 * w x y z {
 * @constant
 * @type { Object.<string, string> }
*/
export const letterAsciiMap = Object.freeze(
  Object.create(null, {
    [l.alaph]: { value: 'a', enumerable: true },
    [l.beth]: { value: 'b', enumerable: true },
    [l.gamal]: { value: 'c', enumerable: true },
    [l.dalath]: { value: 'd', enumerable: true },

    [l.he]: { value: 'e', enumerable: true },
    [l.waw]: { value: 'f', enumerable: true },
    [l.zayn]: { value: 'g', enumerable: true },

    [l.heth]: { value: 'h', enumerable: true },
    [l.teth]: { value: 'i', enumerable: true },
    [l.yod]: { value: 'j', enumerable: true },

    [l.kaph]: { value: 'k', enumerable: true },
    [l.lamadh]: { value: 'l', enumerable: true },
    [l.mim]: { value: 'm', enumerable: true },
    [l.nun]: { value: 'n', enumerable: true },

    [l.semkath]: { value: 'o', enumerable: true },
    [l.e]: { value: 'p', enumerable: true },
    [l.pe]: { value: 'q', enumerable: true },
    [l.sadhe]: { value: 'r', enumerable: true },

    [l.qoph]: { value: 's', enumerable: true },
    [l.resh]: { value: 't', enumerable: true },
    [l.shin]: { value: 'u', enumerable: true },
    [l.taw]: { value: 'v', enumerable: true },

    [v.pthaha]: { value: 'w', enumerable: true }, // a
    [v.zqapha]: { value: 'x', enumerable: true }, // o
    [v.rbasa]: { value: 'y', enumerable: true }, // e
    [v.hbasa]: { value: 'z', enumerable: true }, // i
    [v.esasa]: { value: '{', enumerable: true }, // u

    [d.qushaya]: { value: '', enumerable: true },
    [d.rukkakha]: { value: ',', enumerable: true },
    [d.lineaOccultans]: { value: '', enumerable: true },
    [d.seyame]: { value: '', enumerable: true }
  })
);

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
 * Return true if input word has vowels or diacritics
 * @param { string } word input CAL code word
 * @returns { boolean } true if word has vowels or diacritics
 */
export const isDotted = hasDotting(isDotting);

/**
 * Remove dotting (vowels and diacritics), leaving consonantal word only.
 * @param { string } word input word to be processed
 * @returns { string } consonantal word
 */
export const removeDotting = clearDotting(isDotting);

/**
 * Comparator function to be used for sorting words
 * @static
 * @param { string } word1 first word to compare
 * @param { string } word2 second word to compare
 * @returns { number } -1, 0, 1 depending on word sorting
 */
export const sort = getSort(letterAsciiMap, isConsonant);
