const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');

class Bridge {
  constructor() {
    this.locationNumber = 0;
    this.compareResult = [[], []];
  }

  getCompareResult() {
    return this.compareResult;
  }

  makeBridge(size) {
    Bridge.#bridgeSizeValidate(size);
    this.bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  }

  compareSpace(value) {
    Bridge.#moveInputValidate(value);
    this.sameCheck(value);
    this.locationNumber += 1;
  }

  sameCheck(value) {
    if (this.bridge[this.locationNumber] === value) {
      this.#correct(value);
      return;
    }

    this.#incorrect(value);
  }

  #incorrect(value) {
    if (value === 'U') {
      this.compareResult[0].push('X');
      this.compareResult[1].push('N');
      return;
    }

    this.compareResult[0].push('N');
    this.compareResult[1].push('X');
  }

  #correct(value) {
    if (value === 'U') {
      this.compareResult[0].push('O');
      this.compareResult[1].push('N');
      return;
    }

    this.compareResult[0].push('N');
    this.compareResult[1].push('O');
  }

  static #bridgeSizeValidate(size) {
    if (!(Number(size) >= 3 && Number(size) <= 20)) {
      throw new Error('3이상 20이하의 길이만 가능합니다');
    }
    if (!(size >= '0' && size <= '9')) throw new Error('0~9숫자만 입력가능합니다');

    if (size[0] === '0') throw new Error('옳지않은 입력입니다');
  }

  static #moveInputValidate(input) {
    if (input.length !== 1) throw new Error('U,D만 입력가능합니다');

    if (!(input === 'U' || input === 'D')) throw new Error('U,D만 입력가능합니다.');
  }
}

module.exports = Bridge;
