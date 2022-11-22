const { makeBridge } = require("./BridgeMaker");
const Constant = require("./Constant");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #bridgeMap;
  #currentPosition;
  #numberOfAttempts;

  constructor() {
    this.#bridge = [];
    this.#currentPosition = 0;
    this.#numberOfAttempts = 1;
  }

  setBridge(bridgeSize) {
    this.#bridge = makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
  }

  setBridgeMap() {
    const topBridge = [];
    const bottomBridge = [];
    for (let i = 0; i < this.#currentPosition; i++) {
      this.insertCorrectBridge(topBridge, bottomBridge, this.#bridge[i]);
    }
    this.#bridgeMap = [topBridge, bottomBridge];
  }

  getNumberOfAttempts() {
    return this.#numberOfAttempts;
  }

  getCurrentPosition() {
    return this.#currentPosition;
  }

  getBridgeMap() {
    return this.#bridgeMap;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   */
  move() {
    this.#currentPosition += 1;
    this.setBridgeMap();
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   */
  retry() {
    this.#currentPosition = 0;
    this.#numberOfAttempts += 1;
  }
  /**
   * 사용자가 실패했을 때 사용하는 메서드
   */ 
  fail() {
    this.setBridgeMap();
    this.setFailBridgeMap();
    OutputView.printMap(this.getBridgeMap());
  }

  insertCorrectBridge(upBridge, downBridge, answerDirection) {
    if (answerDirection === Constant.COMMAND_UP_DIRECTION_STRING) {
      upBridge.push(Constant.CORRECT_STRING);
      downBridge.push(Constant.BLANK_STRING);
    }
    if (answerDirection === Constant.COMMAND_DOWN_DIRECTION_STRING) {
      upBridge.push(Constant.BLANK_STRING);
      downBridge.push(Constant.CORRECT_STRING);
    }
  }

  isFinish() {
    if (this.#currentPosition === this.#bridge.length) {
      return true;
    }
    return false;
  }

  shallWeQuit(command) {
    if (command === Constant.COMMAND_QUIT_STRING) {
      return true;
    }
    return false;
  }
}

module.exports = BridgeGame;
