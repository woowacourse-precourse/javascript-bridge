/* eslint-disable class-methods-use-this */
class BridgeSize {
  #bridgeSize;

  constructor(bridgeSize) {
    this.validate(bridgeSize);
    this.#bridgeSize = bridgeSize;
  }

  validate(bridgeSize) {
    if (bridgeSize < 3 || bridgeSize > 20) {
      throw new Error('[ERROR] 다리 길이는 3이상 20이하 숫자를 입력하시길 바랍니다.');
    }
  }

  getBridgeSize() {
    return this.#bridgeSize;
  }
}

module.export = BridgeSize;
