const { GAME_PATTERN, GAME_COMMAND } = require('../constants/bridgeGame');
const REPEAT_COUNT = 3;

class BridgeMapPainter {
  #upperBridge;
  #lowerBridge;

  constructor() {
    this.initBridge();
  }

  initBridge() {
    this.#lowerBridge = [];
    this.#upperBridge = [];
  }

  getUserBridgeMap() {
    return `[${this.#upperBridge.join('')}]\n[${this.#lowerBridge.join('')}]\n`;
  }

  isCorrectLocation() {
    const hasX = [...this.#upperBridge, ...this.#lowerBridge].join(' ').includes('X');
    if (hasX) {
      return false;
    }
    return true;
  }

  #appendVerticalBar() {
    const { verticalBar } = GAME_PATTERN;
    this.#upperBridge.push(verticalBar);
    this.#lowerBridge.push(verticalBar);
  }

  #appendEmptySpace(selectBridge) {
    if (selectBridge !== this.#upperBridge) {
      this.#upperBridge.push(' '.repeat(REPEAT_COUNT));
      return;
    }
    this.#lowerBridge.push(' '.repeat(REPEAT_COUNT));
  }

  drawOX(moveCommand, userLocation, gameMap) {
    this.checkBridgeLocation(userLocation);

    const oxPattern = this.selectOXpattern(moveCommand, userLocation, gameMap);
    const selectBridge = this.selectUpOrDownBridge(moveCommand, userLocation);

    selectBridge.push(` ${oxPattern} `);
    this.#appendEmptySpace(selectBridge);

    return this.getUserBridgeMap();
  }

  selectUpOrDownBridge(moveCommand) {
    const { up } = GAME_COMMAND;
    if (moveCommand === up) {
      return this.#upperBridge;
    }
    return this.#lowerBridge;
  }

  selectOXpattern(moveCommand, userLocation, gameMap) {
    const { o, x } = GAME_PATTERN;
    const isPossibleNext = gameMap[userLocation] === moveCommand;

    if (isPossibleNext) {
      return o;
    }
    return x;
  }

  checkBridgeLocation(userLocation) {
    if (userLocation !== 0) {
      this.#appendVerticalBar();
    }
  }

  isCorrectLocation() {
    const hasX = [...this.#upperBridge, ...this.#lowerBridge].join(' ').includes('X');
    if (hasX) {
      return false;
    }
    return true;
  }
}

module.exports = BridgeMapPainter;
