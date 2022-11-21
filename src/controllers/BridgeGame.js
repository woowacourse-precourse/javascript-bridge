const Bridge = require('../models/bridge');
const Player = require('../models/player');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor() {
    this.bridge = new Bridge();
    this.player = new Player();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(resultAnalysis, start) {
    this.player.move((answer) => {
      this.bridge.compareSpace(answer, start, resultAnalysis);
    });
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(resultAnalysis) {
    this.#adjustmentGameStatus();
    this.move(() => resultAnalysis());
  }

  #adjustmentGameStatus() {
    this.bridge.executionCount += 1;
    this.bridge.locationNumber = 0;
    this.bridge.compareResult = [[], []];
  }
}

module.exports = BridgeGame;
