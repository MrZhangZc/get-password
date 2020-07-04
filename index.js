const { shuffle, initOptions, toArr, getRandomRes, testRange } = require('./util');

class getPassWord {
  constructor() {
    this.NUMBERS = '0123456789';
    this.CHARS_LOWER = 'abcdefghijklmnopqrstuvwxyz';
    this.CHARS_UPPER = this.CHARS_LOWER.toUpperCase();
    this.SYMBOLS = "!@#$%^&*()[]";
  }

  getMyPassWord(opts) {
    let { type, length } = initOptions(opts, {
      length: 8,
      type: 1
    })
    testRange(length <= 0 || length > 1000, 'Error length');
    testRange(!([1, 2, 3, 4].includes(type)) , 'type should be 1 or 2 or 3 or 4');
    testRange(length < type, 'length shound not less then type');

    let result = '';
    let evertLen = Math.floor(length / type);
    

    switch(type) {
      case 1 :
        result += getRandomRes(this.NUMBERS, evertLen);
        break;
      case 2 :
        result += getRandomRes(this.NUMBERS, evertLen) + getRandomRes(this.CHARS_LOWER, length - evertLen);
        break;
      case 3 :
        result += getRandomRes(this.NUMBERS, evertLen) + getRandomRes(this.CHARS_LOWER, evertLen) + getRandomRes(this.CHARS_UPPER, length - 2 * evertLen);
        break;
      case 4 :
        result += getRandomRes(this.NUMBERS, evertLen) + getRandomRes(this.CHARS_LOWER, evertLen) + getRandomRes(this.CHARS_UPPER, evertLen) + getRandomRes(this.SYMBOLS, length - 3 * evertLen);
        break;
    }
    
    return shuffle(toArr(result)).join('');
  }
}

module.exports = getPassWord;
