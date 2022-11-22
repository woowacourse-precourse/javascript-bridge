const BridgeMap = require("./BridgeMap");
const { INITIAL_COUNT, INITIAL_STATE, RESULT } = require("../utils/constants");

class BridgeGame {
  static bridge;
  static movingCount = INITIAL_COUNT;
  static currentState = INITIAL_STATE;
  static tryCount = INITIAL_COUNT;

  static move(moving, readFuncs) {
    this.saveState(moving);

    const gameInfo = this.createGameInfo();

    BridgeMap.createMap(gameInfo, readFuncs);
  }

  static saveState(moving) {
    const movingResult = this.bridge[this.movingCount] === moving;

    this.movingCount += 1;
    this.currentState = [
      ...this.currentState,
      [moving, movingResult ? RESULT.RIGHT : RESULT.WRONG],
    ];
  }

  static createGameInfo() {
    return {
      gameState: this.currentState,
      originBridgeSize: this.bridge.length,
      tryCount: this.tryCount,
    };
  }

  static retry(readMoving) {
    this.resetState();

    readMoving();
  }

  static resetState() {
    this.movingCount = INITIAL_COUNT;
    this.currentState = INITIAL_STATE;
    this.tryCount += 1;
  }
}

module.exports = BridgeGame;
