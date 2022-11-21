const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');
const { STEP, RESULT } = require('../Utils/constants');

class BridgeGame {
  #bridge;
  #tryCount;
  #steps;
  #upSide;
  #downSide;
  #result;

  constructor(size) {
    this.#tryCount = 1;
    this.#steps = 0;
		this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.#upSide = [];
    this.#downSide = [];
    this.#result = RESULT.FAIL;
  }
  
  #isAllDone() {
    if (this.#steps === this.#bridge.length) {
      this.#result = RESULT.SUCCESS;
      return RESULT.FINISH;
    }
    return RESULT.GOOD;
  }
  
  #moveUpSide() {
    if (this.#bridge[this.#steps - 1] == STEP.DOWN) {
      this.#upSide.push('X');
      return RESULT.BAD;
    }
    this.#upSide.push('O');
    return (this.#isAllDone());
  }
  
  #moveDownSide() {
    if (this.#bridge[this.#steps - 1] == STEP.UP) {
      this.#downSide.push('X');
      return RESULT.BAD;
    }
    this.#downSide.push('O');
    return (this.#isAllDone());
  }
  
  move(move) {
    this.#steps += 1;
    if (move === STEP.DOWN) {
      this.#upSide.push(' ');
      return this.#moveDownSide();
    }
    if (move === STEP.UP) {
      this.#downSide.push(' ');
      return this.#moveUpSide();
    }
  }

  getSide(side) {
    if (side == STEP.UP) {
      return this.#upSide;
    }
    if (side == STEP.DOWN) {
      return this.#downSide;
    }
  }

  getTryCount() {
    return this.#tryCount;
  }

  getResult() {
    return this.#result;
  }

  retry(playingBridge) {
    this.#steps = 0;
    this.#tryCount += 1;
    this.#upSide.length = 0;
    this.#downSide.length = 0;
    playingBridge();
  }
}

module.exports = BridgeGame;
