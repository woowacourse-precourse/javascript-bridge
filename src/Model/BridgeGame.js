const BridgeMaker = require("../BridgeMaker");
const OutputView = require("../View/OutputView");
const BridgeRandomNumberGenerator = require("../BridgeRandomNumberGenerator");

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
    this.#retryCount = 0;
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
    console.log(correctSquare);
  }

  move(square) {
    // 입력된 칸 값을 이용해 선택한 다리 칸 배열 만들기
    const selectBridge = this.makeSelectBridge(square);
    const isUserDie = this.isDie(selectBridge);
    const retryCount = this.getRetryCount;
    // 결과 출력하기
    OutputView.printMap(selectBridge, isUserDie);
    // 사망 여부 구하기 + 재시도 판별하기
    if (isUserDie) return this.retry(retryCount);
    // 다 건넌 경우 판별
    if (this.isGameClear(selectBridge)) {
      OutputView.printResult(selectBridge, isUserDie, retryCount);
      return 2;
    }
  }

  retry(retryCount) {
    // 함수 호출 시 죽었다는 의미. 따라서 재시도 = 참
    this.setRetryCount = retryCount + 1;
    return 1;
  }

  isGameClear(selectBridge) {
    const correctBridge = this.getCorrectBridge;
    return this.isSame(selectBridge.length, correctBridge.length);
  }

  initSelectBridge() {
    this.setSelectBridge = [];
  }

  makeSelectBridge(square) {
    const oldSelectBridge = this.getSelectBridge;
    const newSelectBridge = [...oldSelectBridge, square];
    this.setSelectBridge = newSelectBridge;
    return newSelectBridge;
  }

  isDie(selectBridge) {
    const correctBridge = this.getCorrectBridge;
    const lastIndex = selectBridge.length - 1;
    if (!this.isSame(selectBridge[lastIndex], correctBridge[lastIndex]))
      return true;
    return false;
  }

  isSame(a, b) {
    if (a === b) return true;
    return false;
  }
}

module.exports = BridgeGame;
