/** @module sedraCodeUtil */
import { hasDotting, clearDotting } from 'aramaic-mapper';

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

const c = consonantsByName;
/**
 * Sedra consonants
 * @constant
 * @type { string[] }
*/
export const consonants = Object.freeze([
  c.alaph,
  c.beth,
  c.gamal,
  c.dalath,

  c.he,
  c.waw,
  c.zayn,

  c.heth,
  c.teth,
  c.yod,

  c.kaph,
  c.lamadh,
  c.mim,
  c.nun,

  c.semkath,
  c.e,
  c.pe,
  c.sadhe,

  c.qoph,
  c.resh,
  c.shin,
  c.taw
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
export const isConsonant = cc => consonants.indexOf(cc) > -1;

/**
 * Is character c a Sedra 3 vowel?
 * @param { string } c input character
 * @returns { boolean } true if c is Sedra 3 vowel
 */
export const isVowel = vc => vowels.indexOf(vc) > -1;

/**
 * Is character c a diacritic? Same characters used for both Sedra 3 and CAL.
 * @param { string } c input character
 * @returns { boolean } true if c is a diacritic
 */
export const isDiacritic = dc => diacritics.indexOf(dc) > -1;

/**
 * Returns true if c is dotting character
 * @param { string } c input character
 * @returns { boolean } true if c is dotting
 */
export const isDotting = vd => dotting.indexOf(vd) > -1;

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
