/* eslint-disable class-methods-use-this */
const { OutputView } = require('../view');
const { BRIDGE_SIZE_RANGE_START, BRIDGE_SIZE_RANGE_END, DECIMAL_NUMBER } = require('../Constant');
const { ERROR_INPUT_NUMBER_LINE, ERROR_INPUT_RANGE_LINE } = require('../Error');

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
      this.#outputView.printError(ERROR_INPUT_NUMBER_LINE);
    }
    if (bridgeSize < BRIDGE_SIZE_RANGE_START || bridgeSize > BRIDGE_SIZE_RANGE_END) {
      this.#close = true;
      this.#outputView.printError(ERROR_INPUT_RANGE_LINE);
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
