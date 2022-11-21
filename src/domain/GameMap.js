const { GAME_COMMAND, GAME_PATTERN } = require('../constants/bridgeGame');

const REPEAT_COUNT = 3;

class GameMap {
  #bridgeGameMap;
  #upperBridge;
  #lowerBridge;

  constructor() {
    this.initBridge();
  }

  initBridge() {
    this.#lowerBridge = [];
    this.#upperBridge = [];
  }

  setBridgeGameMap(gameMap) {
    this.#bridgeGameMap = gameMap;
  }

  getMapLength() {
    return this.#bridgeGameMap.length;
  }

  drawOX(moveCommand, userLocation) {
    this.checkBridgeLocation(userLocation);

    const oxPattern = this.selectOXpattern(moveCommand, userLocation);
    const selectBridge = this.selectUpOrDownBridge(moveCommand, userLocation);
    selectBridge.push(` ${oxPattern} `);
    this.appendEmptySpace(selectBridge);

    return this.getUserBridgeMap();
  }

  checkBridgeLocation(userLocation) {
    if (userLocation !== 0) {
      this.appendVerticalBar();
    }
  }

  getUserBridgeMap() {
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
    return x;
  }

  isCorrectLocation() {
    const hasX = [...this.#upperBridge, ...this.#lowerBridge].join(' ').includes('X');
    if (hasX) {
      return false;
    }
    return true;
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
