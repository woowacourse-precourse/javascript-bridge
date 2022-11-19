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
    const selected = this.#makeSelected(direction);
    this.#gameStatus[selected].push(this.#answer(direction));
    this.#gameStatus[this.#makeUnselected(direction)].push(BRIDGE_GAME.EMPTY);
    this.#increaseStep();
    this.#setGameStatus(this.#gameStatus[selected]);

    return {
      upBridge: this.#gameStatus.upBridge,
      downBridge: this.#gameStatus.downBridge,
    };
  }

  #makeSelected(direction) {
    return direction === BRIDGE_GAME.INPUT_U ? BRIDGE_GAME.UP_BRIDGE : BRIDGE_GAME.DOWN_BRIDGE;
  }

  #answer(direction) {
    return direction === this.#bridge[this.#gameStatus.length]
      ? BRIDGE_GAME.CORRECT
      : BRIDGE_GAME.INCORRECT;
  }

  #makeUnselected(direction) {
    return direction === BRIDGE_GAME.INPUT_U ? BRIDGE_GAME.DOWN_BRIDGE : BRIDGE_GAME.UP_BRIDGE;
  }

  #increaseStep() {
    this.#gameStatus.length += BRIDGE_GAME.STEP;
  }

  #setGameStatus(selected) {
    const index = selected.length - 1;

    if (selected[index] === BRIDGE_GAME.INCORRECT) {
      this.#gameStatus.status = GAME_STATUS.FAIL_END;
    }

    if (selected[index] === BRIDGE_GAME.CORRECT && selected.length === this.#bridge.length) {
      this.#gameStatus.status = GAME_STATUS.SUCCESS_END;
    }
  }

  checkGameStatus() {
    return this.#gameStatus.status;
  }

  retry(playGame) {
    this.#tryCount += 1;
    this.#resetGameStatus();
    playGame();
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
