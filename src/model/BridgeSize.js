/* eslint-disable class-methods-use-this */
const { OutputView } = require('../view');

class BridgeSize {
  #bridgeSize;

  #outputView;

  #close;

  constructor(bridgeSize) {
    const outputView = Object.create(OutputView);
    this.#outputView = outputView;
    this.validate(bridgeSize);
    this.#bridgeSize = bridgeSize;
  }

  validate(bridgeSize) {
    // eslint-disable-next-line no-restricted-globals
    const isNumber = bridgeSize.match(/^[0-9]+$/g);
    if (!isNumber) {
      this.#close = true;
      this.#outputView.printError('[ERROR] 숫자를 입력하시길 바랍니다.');
    }
    if (bridgeSize < 3 || bridgeSize > 20) {
      this.#close = true;
      this.#outputView.printError('[ERROR] 다리 길이는 3이상 20이하 숫자를 입력하시길 바랍니다.');
    }
  }

  getClose() {
    return this.#close;
  }

  getBridgeSize() {
    return parseInt(this.#bridgeSize, 10);
  }
}

module.exports = BridgeSize;
