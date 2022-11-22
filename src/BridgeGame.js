const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const InputView = require('./InputView');
const { checkValidDirection } = require('./utils/validator');
const { Console } = require('@woowacourse/mission-utils');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge;
  #bridgeStack;
  #retryCount;
  #isSuccess;

  constructor() {
    this.#bridge = [];
    this.#bridgeStack = [];
    this.#retryCount = 0;
    this.#isSuccess = false;
  }

  start() {
    InputView.readBridgeSize(this);
  }

  set(size) {
    this.#bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    console.log(this.#bridge);
    InputView.readMoving(this);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    checkValidDirection(direction);
    this.checkBridge(direction);
  }

  checkBridge(direction) {
    const isRightDirection = this.checkRightDirection(direction);
    if (!isRightDirection) InputView.readGameCommand(this);
    if (isRightDirection) {
      this.#bridgeStack.push(direction);
      this.checkTerminate();
    }
  }

  checkRightDirection(direction) {
    if (this.#bridge[this.#bridgeStack.length] === direction) {
      return true;
    }
    return false;
  }

  checkTerminate() {
    const isTerminate = this.#bridge.length === this.#bridgeStack.length;
    if (isTerminate) {
      this.close();
    }
    if (!isTerminate) InputView.readMoving(this);
  }

  close() {
    Console.print('게임 성공 여부: 성공');
    Console.close();
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#retryCount += 1;
    this.#bridgeStack = [];
    InputView.readMoving(this);
  }
}

module.exports = BridgeGame;
