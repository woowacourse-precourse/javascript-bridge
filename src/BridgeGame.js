const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { checkValidDirection, checkValidCommand } = require('./utils/validator');
const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('./constants/message');

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
    this.#retryCount = 1;
    this.#isSuccess = false;
    Console.print(MESSAGE.GAME.START);
  }

  start() {
    InputView.readBridgeSize(this);
  }

  set(size) {
    try {
      this.#bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
      console.log(this.#bridge);
      InputView.readMoving(this);
    } catch (e) {
      Console.print(MESSAGE.ERROR.SIZE);
      this.start();
    }
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    try {
      checkValidDirection(direction);
      this.checkBridge(direction);
    } catch (e) {
      Console.print(MESSAGE.ERROR.MOVE);
      InputView.readMoving(this);
    }
  }

  checkBridge(direction) {
    const isRightDirection = this.checkRightDirection(direction);
    this.#bridgeStack.push(direction);
    OutputView.printMap(this.#bridge, this.#bridgeStack);
    if (!isRightDirection) {
      InputView.readGameCommand(this);
    }
    if (isRightDirection) {
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
      this.#isSuccess = true;
      this.close();
    }
    if (!isTerminate) {
      InputView.readMoving(this);
    }
  }

  readCommand(command) {
    try {
      checkValidCommand(command);
      if (command === 'Q') this.close();
      if (command === 'R') this.retry();
    } catch (e) {
      Console.print(MESSAGE.ERROR.RETRY);
      InputView.readGameCommand(this);
    }
  }

  close() {
    OutputView.printResult(this.#bridge, this.#bridgeStack, this.#isSuccess, this.#retryCount);
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
