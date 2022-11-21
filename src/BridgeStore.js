class BridgeStore {
  #bridge;

  #tryCount;

  #userInputResults = [];

  constructor(bridge, tryCount) {
    // REMOVE: 임시 다리 확인
    console.log(bridge);
    this.#bridge = bridge;
    this.#tryCount = tryCount;
  }

  isSameWithBridgeLength(number) {
    return this.#bridge.length === number;
  }

  isMovable(count, command) {
    // TODO: 이미 완료한 경우 추가
    return this.#bridge[count] === command;
  }

  addUserInputResult(result) {
    this.#userInputResults = [...this.#userInputResults, result];
  }

  resetUserInputResult() {
    this.#userInputResults = [];
  }

  getUserInputResult = (idx) => this.#userInputResults[idx];

  isGameClear(moveCount) {
    return this.isSameWithBridgeLength(moveCount) && this.#userInputResults.every((el) => el);
  }

  updateTryCount() {
    this.#tryCount += 1;
  }

  retry() {
    this.updateTryCount();
    this.resetUserInputResult();
  }

  /* 게임 성공 여부: 실패
   총 시도한 횟수: 1 */
  getGameResult(moveCount) {
    return {
      isGameClear: this.isGameClear(moveCount),
      tryCount: this.#tryCount,
    };
  }
}

module.exports = BridgeStore;
