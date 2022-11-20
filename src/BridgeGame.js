const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #gameStatus;

  #OUTPUT_MESSAGES = {
    PRINT_RESULT: 'printResult',
    PRINT_MAP: 'printMap',
    READ_MOVING: 'readMoving',
    READ_GAME_COMMAND: 'readGameCommand',
  };

  set(bridgeSize) {
    this.#gameStatus = {
      bridge: BridgeMaker.makeBridge(bridgeSize, generate),
      currentPosition: 0,
      liveOrDie: true,
      numberOfChallenge: 1,
    };
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(direction) {
    const gameStatusForReturn = { ...this.#gameStatus };
    const { bridge, currentPosition } = this.#gameStatus;
    this.#gameStatus.liveOrDie = direction === bridge[currentPosition];
    if (this.#gameStatus.liveOrDie) {
      return this.nextStepDecider(bridge, currentPosition, gameStatusForReturn);
    }
    if (!this.#gameStatus.liveOrDie) return this.whetherRetryPackage();
  }

  nextStepDecider(bridge, currentPosition, gameStatusForReturn) {
    if (bridge.length - 1 === currentPosition) {
      return this.printResultPackage();
    }
    if (bridge.length - 1 !== currentPosition) {
      this.#gameStatus.currentPosition += 1;
      return this.printMapPackage(gameStatusForReturn);
    }
  }

  printResultPackage() {
    return {
      nextInputView: null,
      nextOutputView: this.#OUTPUT_MESSAGES.PRINT_RESULT,
      gameStatus: this.#gameStatus,
    };
  }

  printMapPackage(gameStatusForReturn) {
    return {
      nextInputView: this.#OUTPUT_MESSAGES.READ_MOVING,
      nextOutputView: this.#OUTPUT_MESSAGES.PRINT_MAP,
      gameStatus: gameStatusForReturn,
    };
  }

  whetherRetryPackage() {
    return {
      nextInputView: this.#OUTPUT_MESSAGES.READ_GAME_COMMAND,
      nextOutputView: null,
    };
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(doOrDie) {
    if (doOrDie === 'R') {
      this.#gameStatus.currentPosition = 0;
      this.#gameStatus.numberOfChallenge += 1;
      return this.retryPackage();
    }
    if (doOrDie === 'Q') {
      return this.quitPackage();
    }
  }

  retryPackage() {
    return {
      nextInputView: this.#OUTPUT_MESSAGES.READ_MOVING,
      nextOutputView: null,
    };
  }

  quitPackage() {
    return {
      nextInputView: null,
      nextOutputView: this.#OUTPUT_MESSAGES.PRINT_RESULT,
      gameStatus: this.#gameStatus,
    };
  }
}

module.exports = BridgeGame;
