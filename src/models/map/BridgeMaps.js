const { MovingCommand } = require('../command');
const BridgeMap = require('./BridgeMap');

/**
 * 다리 지도 관리 클래스
 * @class
 */
class BridgeMaps {
  #upside = new BridgeMap();

  #downside = new BridgeMap();

  /**
   * 다리 지도 가져올 때 사용하는 메서드
   * @returns {Array.<BridgeMap.BridgeProcess>}
   */
  getMaps() {
    return [this.#upside.getState(), this.#downside.getState()];
  }

  /**
   * 다리에 칸 추가할 때 사용하는 메서드
   * @param {MovingCommand} movingCommand
   * @param {'U' | 'D'} currentBridge
   */
  add(movingCommand, currentBridge) {
    const isCrossed = movingCommand.isCrossed(currentBridge);

    this.#addUpside(movingCommand, isCrossed);
    this.#addDownside(movingCommand, isCrossed);
  }

  /**
   * 위쪽 다리에 칸 추가할 때 사용하는 private 메서드
   * @param {MovingCommand} movingCommand
   * @param {boolean} isCrossed
   */
  #addUpside(movingCommand, isCrossed) {
    if (movingCommand.isUpside()) {
      this.#upside.addIsCrossed(isCrossed);
      return;
    }
    this.#upside.addNotSelected();
  }

  /**
   * 위쪽 다리에 칸 추가할 때 사용하는 private 메서드
   * @param {MovingCommand} movingCommand
   * @param {boolean} isCrossed
   */
  #addDownside(movingCommand, isCrossed) {
    if (movingCommand.isDownside()) {
      this.#downside.addIsCrossed(isCrossed);
      return;
    }
    this.#downside.addNotSelected();
  }

  /**
   * 지도 초기화할 때 사용하는 메서드
   */
  reset() {
    this.#upside.reset();
    this.#downside.reset();
  }
}

module.exports = BridgeMaps;
