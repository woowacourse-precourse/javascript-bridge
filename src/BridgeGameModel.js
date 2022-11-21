const { makeBridge } = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class BridgeGameModel {
  #bridge;
  #bridgeSize;
  #userMove;
  #playCount;
  #isSuccess;
  #step;
  #command;

  constructor() {
    this.#bridge = [];
    this.#bridgeSize = 0;
    this.#userMove = [];
    this.#playCount = 0;
    this.#isSuccess = false;
    this.#step = '';
    this.command = '';
  }

  setUserMove(move) {
    this.#userMove.push(move);
  }

  getUserMove() {
    return this.#userMove;
  }

  setBridgeSize(size) {
    this.#bridgeSize = size;
    this.setBridge();
  }

  setBridge() {
    this.#bridge = makeBridge(
      this.#bridgeSize,
      BridgeRandomNumberGenerator.generate,
    );
  }

  getBridge() {
    return this.#bridge;
  }

  setStep(step) {
    this.#step = step;
  }

  getStep() {
    return this.#step;
  }

  setCommand(command) {
    this.#command = command;
  }

  getCommand() {
    return this.#command;
  }

  setIsSuccess(isSuccess) {
    this.#isSuccess = isSuccess;
  }

  getIsSuccess() {
    return this.#isSuccess;
  }
}

module.exports = BridgeGameModel;
