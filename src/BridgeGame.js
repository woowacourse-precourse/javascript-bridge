const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { MOVEMENT_RESULT } = require('./Constants');

const { generate } = BridgeRandomNumberGenerator;

class BridgeGame {
  #bridge;
  #userPath = [];
  #numOfAttempts = 1;

  constructor(size) {
    this.#bridge = BridgeMaker.makeBridge(+size, generate);
  }

  move(movement) {
    this.#userPath.push(movement);
  }

  getGameState() {
    return {
      currentState: this.#judgeUserMovement(),
      userPath: this.#userPath,
      bridge: this.#bridge,
      attempts: this.#numOfAttempts,
    };
  }

  retry() {
    this.#numOfAttempts += 1;
    this.#userPath = [];
  }

  #judgeUserMovement() {
    if (!this.#isMovemontCorrect()) return MOVEMENT_RESULT.WRONG;
    if (this.#isFinish()) return MOVEMENT_RESULT.GAME_SUCCESS;
    return MOVEMENT_RESULT.CORRECT;
  }

  #isMovemontCorrect() {
    const currentPosition = this.#userPath.length - 1;
    return this.#userPath[currentPosition] === this.#bridge[currentPosition];
  }

  #isFinish() {
    return this.#userPath.length === this.#bridge.length;
  }
}

module.exports = BridgeGame;
