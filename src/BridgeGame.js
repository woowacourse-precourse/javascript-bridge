const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { KEY } = require('./Constants');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #answerBridge;
  #userBridge = [[], []];
  #userInput = [];
  #attempts;

  constructor() {
    this.#attempts = 1;
  }

  getAnswerBridge(size) {
    this.#answerBridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(movingKey) {
    this.#userInput.push(movingKey);
    this.addUserBridge(movingKey);
  }

  addUserBridge(movingKey) {
    const MOVE_RESULT = this.getMoveResult(movingKey);
    if (movingKey === KEY.UP) {
      this.#userBridge[0].push(MOVE_RESULT);
      this.#userBridge[1].push(' ');
    }
    if (movingKey === KEY.DOWN) {
      this.#userBridge[0].push(' ');
      this.#userBridge[1].push(MOVE_RESULT);
    }
  }

  getMoveResult(movingKey) {
    if (this.#answerBridge[this.getMovingCount() - 1] === movingKey) {
      return 'O';
    } else {
      return 'X';
    }
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#attempts += 1;
    this.#userBridge = [[], []];
    this.#userInput = [];
  }

  isRetry(commandKey) {
    if (commandKey === KEY.RETRY) {
      this.retry();
      return true;
    }
    if (commandKey === KEY.END) {
      return false;
    }
  }

  isSuccess() {
    const USER_INPUT = String(this.#userInput);
    const ANSWER_BRIDGE = String(this.#answerBridge);
    if (USER_INPUT === ANSWER_BRIDGE) {
      return true;
    } else {
      return false;
    }
  }

  getMovingCount() {
    return this.#userInput.length;
  }

  getAttempts() {
    return this.#attempts;
  }

  getUserBridge() {
    return this.#userBridge;
  }
}

module.exports = BridgeGame;
