const initOptions = (options, defaults) => {
  options = options || {};
  if (defaults) {
    for (var i in defaults) {
      if (typeof options[i] === 'undefined') {
        options[i] = defaults[i];
      }
    }
  }
  return options;
}

const shuffle = arr => {
  const len = arr.length;
  for(let i = len - 1;i > 0;i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const toArr = str => Array.from(str);

const randomNumByLen = len => Math.floor(Math.random() * len);

const getRandomRes = (str, len) => {
  let result = '';
  while(len > 0) {
    result += str[randomNumByLen(str.length)];
    len--;
  }
  return result;
}

function testRange(test, errorMessage) {
  if (test) {
      throw new Error(errorMessage);
  }
}

module.exports = {
  shuffle,
  initOptions,
  toArr,
  getRandomRes,
  testRange
}
