const { GAME_COMMAND, GAME_PATTERN } = require('../constants/bridgeGame');

const REPEAT_COUNT = 3;

class GameMap {
  #CorretBridge;
  #upperBridge = [];
  #lowerBridge = [];
  #gameOver = false;

  initBridge() {
    this.#lowerBridge = [];
    this.#upperBridge = [];
  }

  setCorretBridge(gameMap) {
    this.#CorretBridge = gameMap;
  }

  getCorretBridge() {
    return this.#CorretBridge;
  }

  isGameOver() {
    return this.#gameOver;
  }

  setRetryGame() {
    this.#gameOver = false;
  }

  getCorretGameMap() {
    return this.#CorretBridge;
  }

  isGameSuccess(userLocation) {
    if (!this.#gameOver && this.#CorretBridge.length === userLocation) {
      return true;
    }
    return false;
  }

  drawBridge(moveCommand, userLocation) {
    if (userLocation !== 0) {
      this.appendVerticalBar();
    }
    const oxPattern = this.selectOXpattern(moveCommand, userLocation);
    const selectBridge = this.selectUpOrDownBridge(moveCommand, userLocation);
    selectBridge.push(` ${oxPattern} `);
    this.appendEmptySpace(selectBridge);

    return this.currentUserBridgeMap();
  }

  currentUserBridgeMap() {
    return `[${this.#upperBridge.join('')}]\n[${this.#lowerBridge.join('')}]\n`;
  }

  selectUpOrDownBridge(moveCommand) {
    const { up } = GAME_COMMAND;
    if (moveCommand === up) {
      return this.#upperBridge;
    }
    return this.#lowerBridge;
  }

  selectOXpattern(moveCommand, userLocation) {
    const { o, x } = GAME_PATTERN;
    const isPossibleNext = this.#CorretBridge[userLocation] === moveCommand;
    if (isPossibleNext) {
      return o;
    }
    this.#gameOver = true;
    return x;
  }

  appendVerticalBar() {
    const { verticalBar } = GAME_PATTERN;
    this.#upperBridge.push(verticalBar);
    this.#lowerBridge.push(verticalBar);
  }

  appendEmptySpace(selectBridge) {
    if (selectBridge !== this.#upperBridge) {
      this.#upperBridge.push(' '.repeat(REPEAT_COUNT));
      return;
    }
    this.#lowerBridge.push(' '.repeat(REPEAT_COUNT));
  }
}

module.exports = GameMap;
