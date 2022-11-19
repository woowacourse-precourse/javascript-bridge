const BridgeMaker = require("./BridgeMaker");
const OutputView = require("./OutputView");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

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
    const correctSquare = BridgeMaker.makeBridge(
      bridgeLength,
      BridgeRandomNumberGenerator.generate
    );
    this.setCorrectBridge = correctSquare;
    console.log(correctSquare);
  }

  initSelectBridge() {
    this.setSelectBridge = [];
  }

  move(square) {
    // 입력된 칸 값을 이용해 선택한 다리 칸 배열 만들기
    const selectBridge = [...this.getSelectBridge, square];
    this.setSelectBridge = selectBridge;
    // 결과 출력하기
    OutputView.printMap(selectBridge, this.isDie(selectBridge));
    // 사망 여부 구하기 + 재시도 판별하기
    if (this.isDie(selectBridge)) return this.retry();
    // 다 건넌 경우 판별
    if (this.isSame(selectBridge.length, this.getCorrectBridge.length))
      return this.isGameClear();
    return 0;
  }

  retry() {
    // 함수 호출 시 죽었다는 의미. 따라서 재시도 = 참
    this.setRetryCount = this.getRetryCount + 1;
    return 1;
  }

  isDie(selectBridge) {
    const correctBridge = this.getCorrectBridge;
    const lastIndex = selectBridge.length - 1;
    if (!this.isSame(selectBridge[lastIndex], correctBridge[lastIndex]))
      return true;
    return false;
  }

  isGameClear() {
    return 2;
  }

  isSame(a, b) {
    if (a === b) return true;
    return false;
  }
}

module.exports = BridgeGame;
