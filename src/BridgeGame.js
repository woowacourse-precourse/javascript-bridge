class BridgeGame {
  #randomBridge

  constructor(randomBridge){
    this.#randomBridge = randomBridge;
  }

  move(userUd) {
    let recentUd = userUd.length - 1;
    if (this.#randomBridge[recentUd] === userUd[recentUd]) {
      return this.lenghtCheck(userUd.length);
    }
    return 0;
  }

  lenghtCheck(userInputLength) {
    if (userInputLength === this.#randomBridge.length) {
      return 2;
    }
    return 1;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
