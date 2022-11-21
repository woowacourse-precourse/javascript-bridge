const { printGameStart } = require('./OutputView');
const { readBridgeSize, readMoving } = require('./InputView');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;

  #movings = [];

  /**
   * 게임을 시작할 때 사용하는 메서드
   */
  init() {
    printGameStart();
    readBridgeSize(this.setBridge.bind(this));
  }

  /**
   * 생성한 다리를 저장할 때 사용하는 메서드
   * @param {Bridge} bridge 생성한 다리
   */
  setBridge(bridge) {
    this.#bridge = bridge;
    this.move();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    readMoving(this.setMoving.bind(this));
  }

  /**
   * 이동할 칸을 저장할 때 사용하는 메서드
   * @param {string} moving 이동할 칸
   */
  setMoving(moving) {
    this.#movings.push(moving);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
