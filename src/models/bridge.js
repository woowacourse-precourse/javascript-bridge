const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');

class Bridge {
  makeBridge(size) {
    Bridge.#bridgeSizeValidate(size);
    this.bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  }

  static #bridgeSizeValidate(size) {
    if (!(Number(size) >= 3 && Number(size) <= 20)) {
      throw new Error('3이상 20이하의 길이만 가능합니다');
    }
    if (!(size >= '0' && size <= '9')) throw new Error('0~9숫자만 입력가능합니다');

    if (size[0] === '0') throw new Error('옳지않은 입력입니다');
  }
}

module.exports = Bridge;
