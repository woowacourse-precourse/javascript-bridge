const RandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const OutputView = require("./OutputView");
const { SIGN, BLOCK } = require("./Constants");

class BridgeInformation {
  #bridgeInformation;
  #route;

  constructor(size) {
    this.#bridgeInformation = BridgeMaker.makeBridge(size, RandomNumberGenerator.generate);
    this.#route = Array.from(Array(2), () => Array());
  }

  makeRouteMap(direction, inputIndex) {
    if (this.correctRoute(direction, inputIndex)) {
      this.changeCorrectRouteStringToSign(direction, inputIndex);
      return;
    }
    this.changeIncorrectRouteStringToSign(direction, inputIndex);
    return;
  }

  changeCorrectRouteStringToSign(direction, inputIndex) {
    if (direction === SIGN.UP_DIRECTION_SIGN) {
      this.#route[0].push(this.checkIndex(inputIndex, SIGN.SUCCESS_SIGN));
      this.#route[1].push(this.checkIndex(inputIndex, SIGN.BLANK_SIGN));
      return;
    }
    this.#route[0].push(this.checkIndex(inputIndex, SIGN.BLANK_SIGN));
    this.#route[1].push(this.checkIndex(inputIndex, SIGN.SUCCESS_SIGN));
    return;
  }

  changeIncorrectRouteStringToSign(direction, inputIndex) {
    if (direction === SIGN.UP_DIRECTION_SIGN) {
      this.#route[0].push(this.checkIndex(inputIndex, SIGN.FAILURE_SIGN));
      this.#route[1].push(this.checkIndex(inputIndex, SIGN.BLANK_SIGN));
      return;
    }
    this.#route[0].push(this.checkIndex(inputIndex, SIGN.BLANK_SIGN));
    this.#route[1].push(this.checkIndex(inputIndex, SIGN.FAILURE_SIGN));
    return;
  }

  correctRoute(direction, inputIndex) {
    if (this.#bridgeInformation[inputIndex] === direction) {
      return true;
    }
    return false;
  }

  checkIndex(index, value) {
    if (!index) {
      return this.makeFirstBlock(value);
    }
    return this.makeNotFirstBlock(value);
  }

  makeFirstBlock(item) {
    return BLOCK.FIRST_BLOCK(item);
  }

  makeNotFirstBlock(item) {
    return BLOCK.NOT_FIRST_BLOCK(item);
  }
}

module.exports = BridgeInformation;
