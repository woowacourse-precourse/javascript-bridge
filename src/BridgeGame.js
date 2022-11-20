const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { readMoving } = require('./InputView');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #gameStatus;

  set(bridgeSize) {
    this.#gameStatus = {
      bridge: BridgeMaker.makeBridge(bridgeSize, generate),
      currentPosition: 0,
      liveOrDie: true,
      numberOfChallenge: 1,
    };
    console.log(this.#gameStatus);
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
      if (bridge.length - 1 === currentPosition)
        return {
          nextInputView: null,
          nextOutputView: 'printResult',
          gameStatus: this.#gameStatus,
        };
      if (bridge.length - 1 !== currentPosition) {
        this.#gameStatus.currentPosition += 1;
        return {
          nextInputView: 'readMoving',
          nextOutputView: 'printMap',
          gameStatus: gameStatusForReturn,
        };
      }
    }
    if (!this.#gameStatus.liveOrDie) {
      return {
        nextInputView: 'readGameCommand',
        nextOutputView: null,
      };
    }
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

      return {
        nextInputView: 'readMoving',
        nextOutputView: null,
      };
    }
    if (doOrDie === 'Q') {
      console.log(this.#gameStatus);
      return {
        nextInputView: null,
        nextOutputView: 'printResult',
        gameStatus: this.#gameStatus,
      };
    }
  }
}

module.exports = BridgeGame;
