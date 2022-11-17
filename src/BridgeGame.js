const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");
const OutputView = require("./OutputView");

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

  move(input) {
    const InputView = require("./InputView");
    const BridgeChecker = require("./BridgeChecker");
    const { up, down, isEnd } = BridgeChecker.check(
      this.#order,
      input,
      this.#bridge
    );
    this.#bridgeResult.upResult.push(up);
    this.#bridgeResult.downResult.push(down);

    OutputView.printMap(this.#bridgeResult.upResult);
    OutputView.printMap(this.#bridgeResult.downResult);

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
