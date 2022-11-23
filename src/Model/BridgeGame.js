const BridgeMaker = require("../BridgeMaker");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");
const { GAME_OVER, GAME_CLEAR } = require("../Constant/Constants");
const ObjectMapping = require("../Mapping/ObjectMapping");

/**
 * 다리 건너기 게임을 관리하는 클래스, 필드 추가가 가능하다.
 */
class BridgeGame {
  #retryCount;
  #selectBridge;
  #correctBridge;

  constructor() {
    this.#selectBridge = [];
    this.#correctBridge = [];
    this.#retryCount = 1;
  }

  set setRetryCount(retryCount) {
    this.#retryCount = retryCount;
  }

  get getRetryCount() {
    return this.#retryCount;
  }

  set setCorrectBridge(correctBridge) {
    this.#correctBridge = correctBridge;
  }

  get getCorrectBridge() {
    return this.#correctBridge;
  }

  set setSelectBridge(selectBridge) {
    this.#selectBridge = selectBridge;
  }

  get getSelectBridge() {
    return this.#selectBridge;
  }

  initGame(bridgeLength) {
    const correctSquares = BridgeMaker.makeBridge(
      bridgeLength,
      BridgeRandomNumberGenerator.generate
    );
    this.setCorrectBridge = correctSquares;
    console.log(correctSquares);
  }

  move(square) {
    this.makeSelectBridge(square);
    if (this.isDie()) return GAME_OVER;
    if (this.isGameClear()) return GAME_CLEAR;
  }

  retry(command) {
    this.setRetryCount = this.getRetryCount + 1;
    if (command === "Q") return false;
    if (command === "R") {
      this.initSelectBridge();
      return true;
    }
  }

  makeMap() {
    const topSquares = this.makeSquares("U");
    const bottomSquares = this.makeSquares("D");
    return topSquares + "\n" + bottomSquares;
  }

  makeSquares(type) {
    const selectBridge = this.getSelectBridge;
    const lastIndex = selectBridge.length - 1;
    const squares = selectBridge.reduce((pre, cur, index) => {
      let string = this.drawOneSquare(cur, type, "O");
      if (!this.isSame(index, lastIndex)) string += "|";
      if (this.isSame(lastIndex, index) && this.isDie())
        string = this.drawOneSquare(cur, type, "X");
      return pre + string;
    }, "[");
    return squares + "]";
  }

  drawOneSquare(cur, type, result) {
    if (cur === type) return ` ${result} `;
    return `   `;
  }

  makeStatistic() {
    return {
      isDie: ObjectMapping.GameClear[!this.isDie()],
      retryCount: this.getRetryCount,
    };
  }

  initSelectBridge() {
    this.setSelectBridge = [];
  }

  makeSelectBridge(square) {
    const oldSelectBridge = this.getSelectBridge;
    const newSelectBridge = [...oldSelectBridge, square];
    this.setSelectBridge = newSelectBridge;
  }

  isGameClear() {
    const selectBridge = this.getSelectBridge;
    const correctBridge = this.getCorrectBridge;
    return this.isSame(selectBridge.length, correctBridge.length);
  }

  isDie() {
    const selectBridge = this.getSelectBridge;
    const correctBridge = this.getCorrectBridge;
    const lastIndex = selectBridge.length - 1;

    if (this.isSame(selectBridge[lastIndex], correctBridge[lastIndex]))
      return false;
    return true;
  }

  isSame(a, b) {
    if (a === b) return true;
    return false;
  }
}

module.exports = BridgeGame;
