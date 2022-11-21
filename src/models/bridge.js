const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const OutputView = require('../views/OutputView');

class Bridge {
  constructor() {
    this.executionCount = 1;
    this.locationNumber = 0;
    this.compareResult = [[], []];
  }

  getCompareResult() {
    return this.compareResult;
  }

  getExecutionCount() {
    return this.executionCount;
  }

  makeBridge(size, init) {
    try {
      Bridge.#bridgeSizeValidate(size, init);
      this.bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    } catch {
      OutputView.printMakeBridgeError();
      init();
    }
  }

  compareSpace(value, start, resultAnalysis) {
    try {
      Bridge.#moveInputValidate(value, start);
      this.sameCheck(value);
      resultAnalysis();
    } catch {
      OutputView.printMoveInputError();
      start();
    }
  }

  sameCheck(value) {
    if (this.bridge[this.locationNumber] === value) {
      this.#correct(value);
      this.locationNumber += 1;
      return;
    }

    this.#incorrect(value);
    this.locationNumber += 1;
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
      throw new Error('입력오류');
    }
  }

  static #moveInputValidate(input) {
    if (!(input === 'U' || input === 'D')) {
      throw new Error('입력오류');
    }
  }
}

module.exports = Bridge;
