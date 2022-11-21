const { printGameStart, printMap, printResult } = require('./OutputView');
const { readBridgeSize, readMoving, readGameCommand } = require('./InputView');
const { makeBridge } = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #attempt = 1;

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
   * @param {number} bridgeSize 다리의 크기
   */
  onReadBridgeSize(bridgeSize) {
    this.#bridge = makeBridge(bridgeSize, generate);
    return this.move();
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
    printMap(this.#bridge, this.#movings);
    if (this.isFailed()) {
      return readGameCommand(this.onReadGameCommand.bind(this));
    }
    if (this.isFinished()) {
      return this.finish();
    }
    return this.move();
  }

  /**
   * 다리를 건너다 실패했는지 확인하는 메서드
   */
  isFailed() {
    const index = this.#movings.length - 1;
    if (this.#bridge[index] === this.#movings[index]) {
      return false;
    }
    return true;
  }

  /**
   * 다리를 성공적으로 건넜는지 확인하는 메서드
   */
  isFinished() {
    const index = this.#movings.length - 1;
    if (
      this.#bridge.length === this.#movings.length
      && this.#bridge[index] === this.#movings[index]
    ) {
      return true;
    }
    return false;
  }

  /**
   * onReadGameCommand() 메서드의 콜백 함수
   * @param {string} gameCommand 게임을 다시 시도할지 종료할지 여부
   */
  onReadGameCommand(gameCommand) {
    if (gameCommand === 'R') {
      return this.retry();
    }
    return this.finish();
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#attempt += 1;
    this.#movings = [];
    this.move();
  }

  /**
   * 게임을 종료할 때 사용하는 메서드
   */
  finish() {
    printResult(this.isFinished(), this.#attempt);
  }
}

module.exports = BridgeGame;
