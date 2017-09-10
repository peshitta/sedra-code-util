# sedra-code-util

[![npm version](https://badge.fury.io/js/sedra-code-util.svg)](https://badge.fury.io/js/sedra-code-util)
[![npm module downloads](http://img.shields.io/npm/dt/sedra-code-util.svg)](https://www.npmjs.org/package/sedra-code-util)
[![Build Status](https://travis-ci.org/peshitta/sedra-code-util.svg?branch=master)](https://travis-ci.org/peshitta/sedra-code-util)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/peshitta/sedra-code-util/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/peshitta/sedra-code-util.svg)](https://david-dm.org/peshitta/sedra-code-util)
[![devDependencies Status](https://david-dm.org/peshitta/sedra-code-util/dev-status.svg)](https://david-dm.org/peshitta/sedra-code-util?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/peshitta/sedra-code-util/badge.svg?branch=master)](https://coveralls.io/github/peshitta/sedra-code-util?branch=master)

Utility library for Sedra 3 ASCII code transliteration

## Installation

```
npm install sedra-code-util --save
```

Following packages are available:
* `sedra-code-util.js` - UMD ES5 version for use in browser, node, etc.
* `sedra-code-util.min.js` - minified version of `sedra-code-util.js`
* `sedra-code-util.esm.js` - ES6 module version, suitable for bundling with other 
libraries and applications

## More information

[Peshitta App](https://peshitta.github.io)

[Beth Mardutho](https://sedra.bethmardutho.org/about/fonts)

[CAL](http://cal1.cn.huc.edu/searching/fullbrowser.html)

## License

[MIT](https://github.com/peshitta/sedra-code-util/blob/master/LICENSE)

## Contributing

The final goal for this work is to learn the Word of God as recorded by
[Peshitta](https://en.wikipedia.org/wiki/Peshitta).
You are welcomed to to improve this implementation or provide feeback. Please
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

* [sedra](#module_sedra)
    * [.wow](#module_sedra.wow) : <code>string</code>
    * [.yod](#module_sedra.yod) : <code>string</code>
    * [.consonants](#module_sedra.consonants) : <code>Array.&lt;string&gt;</code>
    * [.vowels](#module_sedra.vowels) : <code>Array.&lt;string&gt;</code>
    * [.diacretics](#module_sedra.diacretics) : <code>Array.&lt;string&gt;</code>
    * [.isConsonant](#module_sedra.isConsonant) ⇒ <code>boolean</code>
    * [.isVowel](#module_sedra.isVowel) ⇒ <code>boolean</code>
    * [.isDiacretic](#module_sedra.isDiacretic) ⇒ <code>boolean</code>

<a name="module_sedra.wow"></a>

### sedra.wow : <code>string</code>
Wow semivowel

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
<a name="module_sedra.yod"></a>

### sedra.yod : <code>string</code>
Yod semivowel

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
<a name="module_sedra.consonants"></a>

### sedra.consonants : <code>Array.&lt;string&gt;</code>
Sedra consonants

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
<a name="module_sedra.vowels"></a>

### sedra.vowels : <code>Array.&lt;string&gt;</code>
Sedra vowels

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
<a name="module_sedra.diacretics"></a>

### sedra.diacretics : <code>Array.&lt;string&gt;</code>
Sedra/CAL diacretic characters:
* __'__ dot above, Qushaya
* __,__ dot below, Rukkakha
* **_** line under
* __*__ Seyame

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
<a name="module_sedra.isConsonant"></a>

### sedra.isConsonant ⇒ <code>boolean</code>
Is character c a Sedra 3 consonant?

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
**Returns**: <code>boolean</code> - true if c is Sedra 3 consonant  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_sedra.isVowel"></a>

### sedra.isVowel ⇒ <code>boolean</code>
Is character c a Sedra 3 vowel?

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
**Returns**: <code>boolean</code> - true if c is Sedra 3 vowel  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

<a name="module_sedra.isDiacretic"></a>

### sedra.isDiacretic ⇒ <code>boolean</code>
Is character c a diacretic? Same characters used for both Sedra 3 and CAL.

**Kind**: static constant of [<code>sedra</code>](#module_sedra)  
**Returns**: <code>boolean</code> - true if c is a diacretic  

| Param | Type | Description |
| --- | --- | --- |
| c | <code>string</code> | input character |

