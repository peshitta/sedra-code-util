# sedra-code-util

[![npm version](https://badge.fury.io/js/sedra-code-util.svg)](https://badge.fury.io/js/sedra-code-util)
[![npm module downloads](http://img.shields.io/npm/dt/sedra-code-util.svg)](https://www.npmjs.org/package/sedra-code-util)
[![Build Status](https://travis-ci.org/peshitta/sedra-code-util.svg?branch=master)](https://travis-ci.org/peshitta/sedra-code-util)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/peshitta/sedra-code-util/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/peshitta/sedra-code-util.svg)](https://david-dm.org/peshitta/sedra-code-util)
[![devDependencies Status](https://david-dm.org/peshitta/sedra-code-util/dev-status.svg)](https://david-dm.org/peshitta/sedra-code-util?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/peshitta/sedra-code-util/badge.svg?branch=master)](https://coveralls.io/github/peshitta/sedra-code-util?branch=master)

Sedra 3 ASCII code transliteration utilities

## Installation

In order to use this library, [Node.js](https://nodejs.org) should be installed. 
Then run:
```
npm install sedra-code-util --save
```

Following bundles are available:
* `sedra-code-util.js` - UMD ES5 version for use in browser, node, etc.
* `sedra-code-util.min.js` - minified version of `sedra-code-util.js`
* `sedra-code-util.esm.js` - ES6 module version, suitable for bundling with other 
libraries and applications

The package could also be downloaded directly from:
[https://registry.npmjs.org/sedra-code-util/-/sedra-code-util-1.0.6.tgz](https://registry.npmjs.org/sedra-code-util/-/sedra-code-util-1.0.6.tgz)

## More information

[Peshitta App](https://peshitta.github.io)

[Beth Mardutho](https://sedra.bethmardutho.org/about/fonts)

[CAL](http://cal1.cn.huc.edu/searching/fullbrowser.html)

## License

[MIT](https://github.com/peshitta/sedra-code-util/blob/master/LICENSE)

## Contributing

The final goal for this work is to learn the Word of God as recorded by
[Peshitta](https://en.wikipedia.org/wiki/Peshitta).
You are welcomed to improve this implementation or provide feedback. Please
feel free to [Fork](https://help.github.com/articles/fork-a-repo/), create a
[Pull Request](https://help.github.com/articles/about-pull-requests/) or
submit [Issues](https://github.com/peshitta/sedra-code-util/issues).
Thank you!

## Development

```
npm install
```
```
npm run build
```

## API Reference

* [sedraCodeUtil](#module_sedraCodeUtil)
    * [.consonantsByName](#module_sedraCodeUtil.consonantsByName) : <code>Object.&lt;string, string&gt;</code>
    * [.consonants](#module_sedraCodeUtil.consonants) : <code>Array.&lt;string&gt;</code>
    * [.vowelsByName](#module_sedraCodeUtil.vowelsByName) : <code>Object.&lt;string, string&gt;</code>
    * [.vowels](#module_sedraCodeUtil.vowels) : <code>Array.&lt;string&gt;</code>
    * [.diacriticsByName](#module_sedraCodeUtil.diacriticsByName) : <code>Object.&lt;string, string&gt;</code>
    * [.diacritics](#module_sedraCodeUtil.diacritics) : <code>Array.&lt;string&gt;</code>
    * [.dotting](#module_sedraCodeUtil.dotting) : <code>Array.&lt;string&gt;</code>
    * [.isConsonant](#module_sedraCodeUtil.isConsonant) ⇒ <code>boolean</code>
    * [.isVowel](#module_sedraCodeUtil.isVowel) ⇒ <code>boolean</code>
    * [.isDiacritic](#module_sedraCodeUtil.isDiacritic) ⇒ <code>boolean</code>
    * [.isDotting](#module_sedraCodeUtil.isDotting) ⇒ <code>boolean</code>
    * [.isDotted](#module_sedraCodeUtil.isDotted) ⇒ <code>boolean</code>
    * [.removeDotting](#module_sedraCodeUtil.removeDotting) ⇒ <code>string</code>

<a name="module_sedraCodeUtil.consonantsByName"></a>

### sedraCodeUtil.consonantsByName : <code>Object.&lt;string, string&gt;</code>
Sedra consonant name to value map

**Kind**: static constant of [<code>sedraCodeUtil</code>](#module_sedraCodeUtil)  
<a name="module_sedraCodeUtil.consonants"></a>

### sedraCodeUtil.consonants : <code>Array.&lt;string&gt;</code>
Sedra consonants

**Kind**: static constant of [<code>sedraCodeUtil</code>](#module_sedraCodeUtil)  
<a name="module_sedraCodeUtil.vowelsByName"></a>

### sedraCodeUtil.vowelsByName : <code>Object.&lt;string, string&gt;</code>
Sedra vowel name to value map

**Kind**: static constant of [<code>sedraCodeUtil</code>](#module_sedraCodeUtil)  
<a name="module_sedraCodeUtil.vowels"></a>

### sedraCodeUtil.vowels : <code>Array.&lt;string&gt;</code>
Sedra vowels

**Kind**: static constant of [<code>sedraCodeUtil</code>](#module_sedraCodeUtil)  
<a name="module_sedraCodeUtil.diacriticsByName"></a>

### sedraCodeUtil.diacriticsByName : <code>Object.&lt;string, string&gt;</code>
Sedra/CAL diacritic name map
1. qushaya: __'__ - dot above
2. rukkakha: __,__ - dot below
3. lineaOccultans: **_** - linea occultans
4. seyame: __*__ - seyame, rebwe

**Kind**: static constant of [<code>sedraCodeUtil</code>](#module_sedraCodeUtil)  
<a name="module_sedraCodeUtil.diacritics"></a>

### sedraCodeUtil.diacritics : <code>Array.&lt;string&gt;</code>
Sedra/CAL diacritic characters:
* __'__ dot above, Qushaya
* __,__ dot below, Rukkakha
* **_** line under
* __*__ Seyame

**Kind**: static constant of [<code>sedraCodeUtil</code>](#module_sedraCodeUtil)  
<a name="module_sedraCodeUtil.dotting"></a>

### sedraCodeUtil.dotting : <code>Array.&lt;string&gt;</code>
Vowels and diacritics: used for consonantal only mapping

**Kind**: static constant of [<code>sedraCodeUtil</code>](#module_sedraCodeUtil)  
<a name="module_sedraCodeUtil.isConsonant"></a>

### sedraCodeUtil.isConsonant ⇒ <code>boolean</code>
Is character c a Sedra 3 consonant?

**Kind**: static constant of [<code>sedraCodeUtil</code>](#module_sedraCodeUtil)  
**Returns**: <code>boolean</code> - true if c is Sedra 3 consonant  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_sedraCodeUtil.isVowel"></a>

### sedraCodeUtil.isVowel ⇒ <code>boolean</code>
Is character c a Sedra 3 vowel?

**Kind**: static constant of [<code>sedraCodeUtil</code>](#module_sedraCodeUtil)  
**Returns**: <code>boolean</code> - true if c is Sedra 3 vowel  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_sedraCodeUtil.isDiacritic"></a>

### sedraCodeUtil.isDiacritic ⇒ <code>boolean</code>
Is character c a diacritic? Same characters used for both Sedra 3 and CAL.

**Kind**: static constant of [<code>sedraCodeUtil</code>](#module_sedraCodeUtil)  
**Returns**: <code>boolean</code> - true if c is a diacritic  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_sedraCodeUtil.isDotting"></a>

### sedraCodeUtil.isDotting ⇒ <code>boolean</code>
Returns true if c is dotting character

**Kind**: static constant of [<code>sedraCodeUtil</code>](#module_sedraCodeUtil)  
**Returns**: <code>boolean</code> - true if c is dotting  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_sedraCodeUtil.isDotted"></a>

### sedraCodeUtil.isDotted ⇒ <code>boolean</code>
Return true if input word has vowels or diacritics

**Kind**: static constant of [<code>sedraCodeUtil</code>](#module_sedraCodeUtil)  
**Returns**: <code>boolean</code> - true if word has vowels or diacritics  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input CAL code word |

<a name="module_sedraCodeUtil.removeDotting"></a>

### sedraCodeUtil.removeDotting ⇒ <code>string</code>
Remove dotting (vowels and diacritics), leaving consonantal word only.

**Kind**: static constant of [<code>sedraCodeUtil</code>](#module_sedraCodeUtil)  
**Returns**: <code>string</code> - consonantal word  

| Param | Type | Description |
| --- | --- | --- |
| word | <code>string</code> | input word to be processed |

