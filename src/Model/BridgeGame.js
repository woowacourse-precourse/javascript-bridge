const { SIGN, STATUS, KEYS } = require('../utils/constants');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../utils/BridgeRandomNumberGenerator');

class BridgeGame {
  #bridge;
  #playerAt = 0;
  #trialCount = 1;
  #moveResult;
  #bridgeUpper = [];
  #bridgeLower = [];
  #gameWin;
  #gameStatus;

  constructor(size) {
    this.#bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
  }

  getTrialCount() {
    return this.#trialCount;
  }

  getGameWin() {
    return this.#gameWin;
  }

  getBridgeUpper() {
    return this.#bridgeUpper;
  }

  getBridgeLower() {
    return this.#bridgeLower;
  }

  move(input) {
    this.#checkMovement(input, this.#bridge, this.#playerAt);
    this.#setBridgeForm(input);
    this.#setGameStatus();
    return [this.#bridgeUpper, this.#bridgeLower, this.#gameStatus];
  }

  #checkMovement(input, bridge, idx) {
    if (input === bridge[idx]) {
      this.#moveResult = SIGN.SUCCESS;
      this.#playerAt = this.#playerAt + 1;
      return;
    }
    this.#moveResult = SIGN.FAILURE;
  }

  #setBridgeForm(input) {
    if (input === KEYS.UP) {
      this.#bridgeUpper.push(this.#moveResult);
      this.#bridgeLower.push(SIGN.EMPTY);
      return;
    }
    this.#bridgeUpper.push(SIGN.EMPTY);
    this.#bridgeLower.push(this.#moveResult);
    return;
  }

  #setGameStatus() {
    this.#setGameNext();
    this.#setGameSuccess();
    this.#setGameFail();
  }

  #setGameNext() {
    if (this.#moveResult === SIGN.SUCCESS) {
      this.#gameStatus = STATUS.NEXT;
      return;
    }
  }

  #setGameSuccess() {
    if (
      this.#moveResult === SIGN.SUCCESS &&
      this.#playerAt === this.#bridge.length
    ) {
      this.#gameStatus = STATUS.SUCCESS;
      this.#gameWin = true;
    }
  }

  #setGameFail() {
    if (this.#moveResult === SIGN.FAILURE) {
      this.#gameStatus = STATUS.FAIL;
      this.#gameWin = false;
    }
  }

  retry() {
    this.#trialCount = this.#trialCount + 1;
    this.#bridgeUpper = [];
    this.#bridgeLower = [];
    this.#playerAt = 0;
    this.#gameStatus = undefined;
    this.#gameWin = undefined;
  }
}

module.exports = BridgeGame;
