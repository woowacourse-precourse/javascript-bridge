const { BRIDGE_GAME, GAME_STATUS } = require('../constants/values');
const { MESSAGE_RESULT } = require('../constants/messages');

class BridgeGame {
  #bridge;

  #tryCount;

  #gameStatus;

  constructor(bridge) {
    this.#bridge = bridge;
    this.#tryCount = 1;
    this.#resetGameStatus();
  }

  #resetGameStatus() {
    this.#gameStatus = {
      length: 0,
      upBridge: [],
      downBridge: [],
      status: GAME_STATUS.PLAYING,
    };
  }

  move(direction) {
    const selectedDirection = this.#makeSelectedDirection(direction);
    this.#gameStatus[selectedDirection].push(this.#updateBridge(direction));
    const unselectedDirection = this.#makeUnselectedDirection(direction);
    this.#gameStatus[unselectedDirection].push(BRIDGE_GAME.EMPTY);
    this.#gameStatus.length += BRIDGE_GAME.STEP;
    this.#setGameStatus(
      this.#gameStatus[selectedDirection],
      this.#gameStatus[selectedDirection].length - 1
    );

    return {
      upBridge: this.#gameStatus.upBridge,
      downBridge: this.#gameStatus.downBridge,
    };
  }

  #makeSelectedDirection(direction) {
    return direction === BRIDGE_GAME.INPUT_U ? BRIDGE_GAME.UP_BRIDGE : BRIDGE_GAME.DOWN_BRIDGE;
  }

  #updateBridge(direction) {
    return direction === this.#bridge[this.#gameStatus.length]
      ? BRIDGE_GAME.CORRECT
      : BRIDGE_GAME.INCORRECT;
  }

  #makeUnselectedDirection(direction) {
    return direction === BRIDGE_GAME.INPUT_U ? BRIDGE_GAME.DOWN_BRIDGE : BRIDGE_GAME.UP_BRIDGE;
  }

  #setGameStatus(selectedDirection, index) {
    if (selectedDirection[index] === BRIDGE_GAME.INCORRECT) {
      this.#gameStatus.status = GAME_STATUS.FAIL_END;
    }

    if (
      selectedDirection[index] === BRIDGE_GAME.CORRECT &&
      selectedDirection.length === this.#bridge.length
    ) {
      this.#gameStatus.status = GAME_STATUS.SUCCESS_END;
    }
  }

  checkGameStatus() {
    return this.#gameStatus.status;
  }

  retry() {
    this.#tryCount += 1;
    this.#resetGameStatus();
  }

  getResult() {
    const successOrFailure =
      this.#gameStatus.status === GAME_STATUS.SUCCESS_END
        ? MESSAGE_RESULT.SUCCESS
        : MESSAGE_RESULT.FAILURE;

    return { successOrFailure, tryCount: this.#tryCount };
  }
}

module.exports = BridgeGame;
