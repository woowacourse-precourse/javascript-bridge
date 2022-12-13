const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #map = { upper: [], lower: [] };
  #bridge;

  constructor(bridgeSize) {
    this.#bridge = BridgeMaker.makeBridge(
      bridgeSize,
      BridgeRandomNumberGenerator.generate,
    );
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(userMove) {
    return this.#bridge[0] === userMove ? 'O' : 'X';
  }

  makeMap(userMove) {
    const judge = this.move(userMove);

    this.#map[userMove === 'U' ? 'lower' : 'upper'].push(' ');
    this.#map[userMove === 'U' ? 'upper' : 'lower'].push(judge);

    if (judge === 'O') {
      this.#bridge.shift();
    }
    return [this.#map.upper, this.#map.lower];
  }

  allBridgeCrossed() {
    return this.#bridge.length > 0;
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(userCommand) {
    this.#map = { upper: [], lower: [] };
    return userCommand === 'R';
  }
}

module.exports = BridgeGame;
