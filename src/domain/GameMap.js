const { BRIDGE_GAME } = require('../constants/bridgeGameInfo');
const { o, x } = BRIDGE_GAME;

const REPEAT_COUNT = 3;
const REMOVE_COUNT = 2;

class GameMap {
  #CorretBridge;
  #upperBridge = [];
  #lowerBridge = [];
  #gameOver = false;

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

  setPrevBridge() {
    for (let i = 0; i < REMOVE_COUNT; i++) {
      this.#lowerBridge.pop();
      this.#upperBridge.pop();
    }
  }

  drawBridge(moveCommand, userLocation) {
    if (userLocation !== 0) {
      this.appendVerticalLine();
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
    const { up } = BRIDGE_GAME;
    if (moveCommand === up) {
      return this.#upperBridge;
    }
    return this.#lowerBridge;
  }

  selectOXpattern(moveCommand, userLocation) {
    const isPossibleNext = this.#CorretBridge[userLocation] === moveCommand;
    if (isPossibleNext) {
      return o;
    }
    this.#gameOver = true;
    return x;
  }

  appendVerticalLine() {
    this.#upperBridge.push('|');
    this.#lowerBridge.push('|');
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
