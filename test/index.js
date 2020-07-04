
const pd = require('../index');

const { expect } = require('chai')
const passWord = new pd();

describe('getMyPassWord test', () => {
  describe('#normal condition', () => {
    it('should get random number length 8', () => {
      const pass = passWord.getMyPassWord();
      expect(pass).to.length(8)
    })
    it('should get random number lower letter length 8', () => {
      const pass = passWord.getMyPassWord({
        length: 8,
        type: 2
      });
      expect(pass).to.length(8)
    })
    it('should get random number lower letter upletter length 8', () => {
      const pass = passWord.getMyPassWord({
        length: 8,
        type: 3
      });
      expect(pass).to.length(8)
    })
    it('should get random number lower letter upletter symbol length 8', () => {
      const pass = passWord.getMyPassWord({
        length: 8,
        type: 4
      });
      expect(pass).to.length(8)
    })
  })
})


