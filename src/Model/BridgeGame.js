const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');
const Bridge = require('./Bridge');
const Map = require('./Map');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;

  #map;

  #tryCount;

  constructor() {
    this.#map = new Map();
    this.#tryCount = 1;
  }

  setBridge(size) {
    const targetBridge = makeBridge(Number(size), generate);
    this.#bridge = new Bridge(targetBridge);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(movingCommand) {
    const { isMovable, isSuccess } = this.#bridge.judgeIsMovable(movingCommand);
    return { isMovable, isSuccess, mapRows: this.#map.record(isMovable, movingCommand) };
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#map = new Map();
    this.#bridge.reset();
    this.#tryCount += 1;
  }

  getResult() {
    return { mapRows: this.#map.getMapRows(), tryCount: this.#tryCount };
  }
}

module.exports = BridgeGame;
