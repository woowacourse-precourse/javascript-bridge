const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const OutputView = require("./OutputView");
const { VALUE } = require("./constant");

class BridgeGame {
  #bridge;
  #order;
  #trialNumber;
  #bridgeResult;

  constructor(size) {
    this.#bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    this.#order = 0;
    this.#trialNumber = 1;
    this.#bridgeResult = {
      upResult: [],
      downResult: [],
    };
  }

  getTrialNumber() {
    return this.#trialNumber;
  }

  getBridgeResult() {
    return this.#bridgeResult;
  }

  initGame() {
    this.#trialNumber++;
    this.#order = 0;
    this.#bridgeResult = {
      upResult: [],
      downResult: [],
    };
  }

  check(input) {
    let up = " ",
      down = " ",
      isEnd = false;
    if (this.#bridge[this.#order] === input)
      input == VALUE.UP ? (up = VALUE.SIGN_O) : (down = VALUE.SIGN_O);
    if (this.#bridge[this.#order] !== input) {
      input == VALUE.UP ? (up = VALUE.SIGN_X) : (down = VALUE.SIGN_X);
      isEnd = true;
    }
    return { up, down, isEnd };
  }

  move(input) {
    const { up, down, isEnd } = this.check(input);
    this.#bridgeResult.upResult.push(up);
    this.#bridgeResult.downResult.push(down);

    OutputView.printMap(this.#bridgeResult.upResult);
    OutputView.printMap(this.#bridgeResult.downResult);

    const InputView = require("./InputView");
    if (isEnd) this.retry(this);
    if (this.#bridge.length - 1 == this.#order)
      OutputView.printResult(this, true);
    else {
      this.#order++;
      InputView.readMoving(this);
    }
  }

  retry(nowGame) {
    const InputView = require("./InputView");
    InputView.readGameCommand(nowGame);
  }
}

module.exports = BridgeGame;
