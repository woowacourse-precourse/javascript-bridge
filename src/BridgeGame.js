class BridgeGame {
  #bridge = [];
  #nowIndex = 0;
  setBridge(bridge) {
    this.#bridge = bridge;
  }
  compareBridge(input) {
    return this.#bridge[this.#nowIndex] === input;
  }
  move() {
    // 현재위치 증가시키기
  }

  retry() {
    // 전체 위치 초기화
  }
}

module.exports = BridgeGame;
