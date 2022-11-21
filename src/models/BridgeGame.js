const { BRIDGE_GAME, GAME_STATE } = require('../constants/values');
const { MESSAGE_RESULT } = require('../constants/messages');
const DataHandler = require('../utils/DataHandler');

class BridgeGame {
  #data = {
    bridge: [],
    tryCount: 0,
    gameProgress: {},
  };

  constructor(bridge) {
    this.#data.bridge = bridge;
    this.#data.tryCount = 1;
    this.#resetGameProgress();
  }

  #resetGameProgress() {
    this.#data.gameProgress = {
      length: 0,
      upBridge: [],
      downBridge: [],
      state: GAME_STATE.PLAYING,
    };
  }

  move(direction) {
    const selected = DataHandler.getSelectedIndex(direction);
    this.#data.gameProgress[selected].push(this.#getSelectOfResult(direction));
    this.#data.gameProgress[DataHandler.getUnselectedIndex(direction)].push(BRIDGE_GAME.EMPTY);
    this.#increaseStep();
    this.#setGameProgress(this.#data.gameProgress[selected]);

    return {
      upBridge: this.#data.gameProgress.upBridge,
      downBridge: this.#data.gameProgress.downBridge,
    };
  }

  #getSelectOfResult(direction) {
    return direction === this.#data.bridge[this.#data.gameProgress.length]
      ? BRIDGE_GAME.CORRECT
      : BRIDGE_GAME.INCORRECT;
  }

  #increaseStep() {
    this.#data.gameProgress.length += BRIDGE_GAME.STEP;
  }

  #setGameProgress(selected) {
    const index = selected.length - 1;

    if (selected[index] === BRIDGE_GAME.INCORRECT) {
      this.#data.gameProgress.state = GAME_STATE.FAIL_STOP;
    }

    if (selected[index] === BRIDGE_GAME.CORRECT && selected.length === this.#data.bridge.length) {
      this.#data.gameProgress.state = GAME_STATE.SUCCESS_STOP;
    }
  }

  checkState() {
    return this.#data.gameProgress.state;
  }

  retry(start) {
    this.#data.tryCount += 1;
    this.#resetGameProgress();
    start();
  }

  getResult() {
    const successOrFailure =
      this.#data.gameProgress.state === GAME_STATE.SUCCESS_STOP
        ? MESSAGE_RESULT.SUCCESS
        : MESSAGE_RESULT.FAILURE;

    return { successOrFailure, tryCount: this.#data.tryCount };
  }
}

module.exports = BridgeGame;
