/* eslint-disable class-methods-use-this */
const { OutputView } = require('../view');
const { BRIDGE_SIZE_RANGE_START, BRIDGE_SIZE_RANGE_END, DECIMAL_NUMBER } = require('../Constant');

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
    const isNumber = bridgeSize.match(/^[0-9]+$/g);
    if (!isNumber) {
      this.#close = true;
      this.#outputView.printError('[ERROR] 숫자를 입력하시길 바랍니다.');
    }
    if (bridgeSize < BRIDGE_SIZE_RANGE_START || bridgeSize > BRIDGE_SIZE_RANGE_END) {
      this.#close = true;
      this.#outputView.printError('[ERROR] 다리 길이는 3이상 20이하 숫자를 입력하시길 바랍니다.');
    }
  }

  getClose() {
    return this.#close;
  }

  getBridgeSize() {
    return parseInt(this.#bridgeSize, DECIMAL_NUMBER);
  }
}

module.exports = BridgeSize;
