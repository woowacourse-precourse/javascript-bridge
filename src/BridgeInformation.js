const OutputView = require("./OutputView");
const { SIGN, BLOCK } = require("./Constants");

class BridgeInformation {
  #bridgeInformation;
  #route;

  constructor(size, correctRoute) {
    this.#bridgeInformation = correctRoute;
    this.#route = Array.from(Array(SIGN.TOTAL_DIRECTION), () => Array());
  }

  output() {
    return this.#bridgeInformation;
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

  finishGame(tryCount, gameStatus) {
    OutputView.printEndGame();
    this.printRouteMap();
    if (gameStatus === SIGN.SUCCESS) {
      OutputView.printResult(tryCount, SIGN.SUCCESS);
      return;
    }
    OutputView.printResult(tryCount, SIGN.FAILURE);
    return;
  }

  resetRoute() {
    this.#route = Array.from(Array(SIGN.TOTAL_DIRECTION), () => Array());
  }

  checkMatchLength(movingRoute) {
    return this.#bridgeInformation.length === movingRoute;
  }

  getWrongRoute() {
    if (
      !this.#route[0].join("").includes(SIGN.FAILURE_SIGN) &&
      !this.#route[1].join("").includes(SIGN.FAILURE_SIGN)
    ) {
      return true;
    }
    return false;
  }

  successStatus(movingRouteLength) {
    if (this.#bridgeInformation.length === movingRouteLength && this.getWrongRoute()) {
      return true;
    }
    return false;
  }

  makeOutputType() {
    const upSideString = this.#route[0].join("");
    const downSideString = this.#route[1].join("");
    return [upSideString, downSideString];
  }

  printRouteMap() {
    const toPrintSample = this.makeOutputType();
    OutputView.printMap(toPrintSample[0]);
    OutputView.printMap(toPrintSample[1]);
  }

  resetRoute() {
    this.#route = Array.from(Array(SIGN.TOTAL_DIRECTION), () => Array());
  }
}

module.exports = BridgeInformation;
