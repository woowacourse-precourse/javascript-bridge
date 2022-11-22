const { ERROR_MESSAGE } = require('./constants/constants');
const bridgeMaterialize = require('./utils/bridgeMaterialize');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #myBridge;
  #nowState;
  #trycount;
  #isCleared;
  #isClearedBoolean;
  #myBridgeMaterialize;

  constructor(makeRandomNumber, bridgeMaker, size) {
    this.#myBridge = bridgeMaker(size, makeRandomNumber);
    this.#nowState = 0;
    this.#myBridgeMaterialize = this.myBridgeMaterialize();
    this.#trycount = 0;
    this.#isClearedBoolean = true;
    this.#isCleared = '성공';
  }

  myBridgeMaterialize() {
    return bridgeMaterialize(this.#myBridge);
  }

  move(input) {
    if (this.#myBridge[this.#nowState] === input) {
      this.#nowState += 1;
      return true;
    }
    if (this.#myBridge[this.#nowState] !== input) return false;
  }

  retry(input) {
    this.#trycount += 1;
    if (input.toUpperCase() === 'R') {
      this.#nowState = 0;
      return true;
    }
    if (input.toUpperCase() === 'Q') return false;
    throw new Error(ERROR_MESSAGE.UNEXCEPTED_ERROR);
  }

  printMyBridge(printMap) {
    if (this.#isClearedBoolean) {
      return printMap(this.#myBridgeMaterialize, this.#nowState - 1, this.#isClearedBoolean);
    }
    return printMap(this.#myBridgeMaterialize, this.#nowState, this.#isClearedBoolean);
  }

  printResultGame(resultFunction) {
    resultFunction(this.#trycount, this.#isCleared);
  }

  gameStateChangeSuccess() {
    this.#isClearedBoolean = true;
    this.#isCleared = '성공';
  }

  gameStateChangeFailure() {
    this.#isClearedBoolean = false;
    this.#isCleared = '실패';
  }

  isFinishedGame() {
    if (this.#nowState === this.#myBridge.length) {
      this.#isClearedBoolean = true;
      this.#isCleared = '성공';
      return true;
    }
    return false;
  }
}

module.exports = BridgeGame;
