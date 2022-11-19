const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const BridgeMaker = require('../BridgeMaker');
const { Console } = require('@woowacourse/mission-utils');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #time;

  constructor() {
    this.#time = 0;
    this.topSide = [];
    this.downSide = [];
  }

  setBridge(size) {
    const bridge = BridgeMaker.makeBridge(size, () =>
      BridgeRandomNumberGenerator.generate()
    );
    console.log(bridge);
    this.#bridge = bridge;
  }

  setTopSide() {
    this.topSide.push('O');
    this.downSide.push('X');
  }

  setDownSide() {
    this.topSide.push('X');
    this.downSide.push('O');
  }

  getMap() {
    return { topSide: this.topSide, downSide: this.downSide };
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(next) {
    const isSuccess = next === this.#bridge[this.#time] ? 1 : 0;

    if (isSuccess && next === 'U') this.setTopSide();
    if (!isSuccess && next === 'U') this.setDownSide();
    if (isSuccess && next === 'D') this.setDownSide();
    if (!isSuccess && next === 'D') this.setTopSide();

    this.#time += 1;

    return isSuccess;
  }

  isEnd() {
    return this.#time === this.#bridge.length;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
