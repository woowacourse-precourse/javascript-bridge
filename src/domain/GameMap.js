const { GAME_COMMAND, GAME_PATTERN } = require('../constants/bridgeGame');

const REPEAT_COUNT = 3;

class GameMap {
  #bridgeGameMap;
  #upperBridge = [];
  #lowerBridge = [];
  #gameOver = false;

  initBridge() {
    this.#lowerBridge = [];
    this.#upperBridge = [];
  }

  setBridgeGameMap(gameMap) {
    this.#bridgeGameMap = gameMap;
  }

  getBridgeGameMap() {
    return this.#bridgeGameMap;
  }

  isGameOver() {
    return this.#gameOver;
  }

  setRetryGame() {
    this.#gameOver = false;
  }

  isGameSuccess(userLocation) {
    if (!this.#gameOver && this.#bridgeGameMap.length === userLocation) {
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
    const isPossibleNext = this.#bridgeGameMap[userLocation] === moveCommand;
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
