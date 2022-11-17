const { generate } = require('./BridgeRandomNumberGenerator');
const { makeBridge } = require('./BridgeMaker');
const { movePossible, getCurrentRoute } = require('./PlayerMove');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeSize;

  #bridge;

  #playerPosition;

  #progress;

  constructor(bridgeSize) {
    this.bridgeSize = bridgeSize;
    this.#bridge = makeBridge(bridgeSize, generate);
    this.#playerPosition = -1;
    this.#progress = true;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(to) {
    this.#playerPosition += 1;
    const position = this.#playerPosition;
    const possible = movePossible(to, this.#playerPosition, this.bridge);
    this.#progress = possible;
    return getCurrentRoute(position, this.bridge, possible);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}

  set bridgeSize(size) {
    // TODO: 입력받은 size가 유효한지 확인 기능 추가
    this.#bridgeSize = size;
  }

  get bridge() {
    return JSON.parse(JSON.stringify(this.#bridge));
  }

  get progress() {
    return this.#progress;
  }
}

module.exports = BridgeGame;
