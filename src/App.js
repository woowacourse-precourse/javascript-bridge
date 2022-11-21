
class App {
  #size;
  #tryCount;

  constructor() {
    this.#size = 0;
    this.#tryCount = 0;
  }

  play() {
  }

  /**
   * 게임을 끝내고 결과를 출력한다.
   * @param {class} bridgeGame 다리 건너기 게임의 인스턴스
   * @param {boolean} result 최종 게임의 성공 여부
   */
  endGame(bridgeGame, result) {
    printResult(
      returnCheckedMap(bridgeGame.bridge, bridgeGame.tempPosition, result),
      result,
      this.#tryCount
    );
  }
}

module.exports = App;
