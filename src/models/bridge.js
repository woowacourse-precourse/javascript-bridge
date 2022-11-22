const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const CONSTANT = require('../constant');
const Validate = require('../utils/validate');
const OutputView = require('../views/OutputView');

const { FAIL_MARK, SUCCESS_MARK, NONE_MARK, UPSTAIR_MARK } = CONSTANT.MARKS;

class Bridge {
  #locationNumber;

  #compareResult;

  constructor() {
    this.#locationNumber = 0;
    this.#compareResult = [[], []];
  }

  getCompareResult() {
    return this.#compareResult;
  }

  resetResult() {
    this.#compareResult = [[], []];
    this.#locationNumber = 0;
  }

  makeBridge(size, init) {
    try {
      Validate.bridgeSizeValidate(size, init);
      this.bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    } catch {
      OutputView.printMakeBridgeError();
      init();
    }
  }

  compareSpace(value, start, resultAnalysis) {
    try {
      Validate.moveInputValidate(value);
      this.sameCheck(value);
      resultAnalysis();
    } catch {
      OutputView.printMoveInputError();
      start();
    }
  }

  sameCheck(value) {
    if (this.bridge[this.#locationNumber] === value) {
      this.#correct(value);
      this.#locationNumber += 1;
      return;
    }

    this.#incorrect(value);
    this.#locationNumber += 1;
  }

  #incorrect(value) {
    if (value === UPSTAIR_MARK) {
      this.#compareResult[0].push(FAIL_MARK);
      this.#compareResult[1].push(NONE_MARK);
      return;
    }

    this.#compareResult[0].push(NONE_MARK);
    this.#compareResult[1].push(FAIL_MARK);
  }

  #correct(value) {
    if (value === UPSTAIR_MARK) {
      this.#compareResult[0].push(SUCCESS_MARK);
      this.#compareResult[1].push(NONE_MARK);
      return;
    }

    this.#compareResult[0].push(NONE_MARK);
    this.#compareResult[1].push(SUCCESS_MARK);
  }
}

module.exports = Bridge;
