const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { VALUE } = require("./constant");

class BridgeGame {
  #status;
  #order;
  #trialNumber;
  #bridge;
  #bridgeResult;
  #isSuccess;

  constructor() {
    this.#status = "start";
    this.#order = 0;
    this.#trialNumber = 1;
    this.#bridge = [];
    this.#bridgeResult = {
      upResult: [],
      downResult: [],
    };
    this.#isSuccess = false;
  }

  getStatus() {
    return this.#status;
  }

  getBridgeResult() {
    return this.#bridgeResult;
  }

  getIsSuccess() {
    return this.#isSuccess;
  }

  getTrialNumber() {
    return this.#trialNumber;
  }

  setStatus(newStatus) {
    this.#status = newStatus;
  }

  setIsSuccess(newIsSuccess) {
    this.#isSuccess = newIsSuccess;
  }

  makeBridge(size) {
    this.#bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
  }

  initGame() {
    this.setStatus("move");
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
      this.setIsSuccess(false);
    }
    return { up, down, isEnd };
  }

  move(input) {
    const { up, down, isEnd } = this.check(input);
    this.#bridgeResult.upResult.push(up);
    this.#bridgeResult.downResult.push(down);

    if (isEnd) this.setStatus("retry");

    if (this.#bridge.length - 1 == this.#order) {
      this.setIsSuccess(true);
      this.setStatus("end");
    }
    this.#order++;
  }

  retry(input) {
    if (input === "R") {
      this.initGame();
      this.setStatus("move");
      return;
    }

    this.setStatus("end");
  }
}

module.exports = BridgeGame;
