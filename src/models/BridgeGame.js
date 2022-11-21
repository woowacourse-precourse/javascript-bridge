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
      step: 0,
      upBridge: [],
      downBridge: [],
      state: GAME_STATE.PLAYING,
    };
  }

  move(direction) {
    const selected = this.#data.gameProgress[DataHandler.getSelectedIndex(direction)];
    const unSelected = this.#data.gameProgress[DataHandler.getUnselectedIndex(direction)];

    this.#setResultOfSelect({ direction, selected, unSelected });
    this.#setGameState(selected);

    return {
      upBridge: this.#data.gameProgress.upBridge,
      downBridge: this.#data.gameProgress.downBridge,
    };
  }

  #setResultOfSelect({ direction, selected, unSelected }) {
    if (direction === this.#data.bridge[this.#data.gameProgress.step]) {
      selected.push(BRIDGE_GAME.CORRECT);
    } else {
      selected.push(BRIDGE_GAME.INCORRECT);
    }
    unSelected.push(BRIDGE_GAME.EMPTY);

    this.#data.gameProgress.step += BRIDGE_GAME.STEP;
  }

  #setGameState(selected) {
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
