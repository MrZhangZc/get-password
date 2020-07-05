
# getpd

get random password 

## Installation

```js
$ npm i getpd
$ yarn add getpd
```

## Example

```js
const PD = require('getpd');
const passWord = new PD();

const pass = passWord.getMyPassWord();
```
or
```js
const PD = require('getpd');
const passWord = new PD();

const pass = passWord.getMyPassWord({
  length: 8,
  type: 2
});

```
## Notes

  four types
  type = 1 only Numbers
  type = 2 Numbers、Lowercase letters
  type = 3 Numbers、Lowercase letters 、Capital letters
  type = 4 Numbers、Lowercase letters 、Capital letters、Symbol
