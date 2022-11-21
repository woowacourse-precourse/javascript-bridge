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
    readBridgeSize(this.onReadBridgeSize.bind(this));
  }

  /**
   * readBridgeSize() 메서드의 콜백 함수
   * @param {Bridge} bridge 생성한 다리
   */
  onReadBridgeSize(bridge) {
    this.#bridge = bridge;
    this.move();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    readMoving(this.onReadMoving.bind(this));
  }

  /**
   * readMoving() 메서드의 콜백 함수
   * @param {string} moving 이동할 칸
   */
  onReadMoving(moving) {
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
