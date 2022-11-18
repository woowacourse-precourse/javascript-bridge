const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridgeAnswer;

  #bridgeMap;

  #correctStep;

  #gameStatus;

  setUp(bridgeLength) {
    // TODO: validation of bridge length
    this.#bridgeAnswer = BridgeMaker.makeBridge(
      bridgeLength,
      BridgeRandomNumberGenerator.generate
    );
    this.#bridgeMap = {
      U: Array(bridgeLength).fill(' '),
      D: Array(bridgeLength).fill(' '),
    };
    this.#correctStep = 0;
    this.#gameStatus = {
      numberOfAttempts: 1,
      isSuccess: false,
      isFinished: false,
    };
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(playerMoving) {
    // TODO: validation of player moving
    const isCorrect = this.isCorrectStep(playerMoving);
    this.updateBridgeMap(playerMoving, isCorrect);
    this.updateGameStatus(isCorrect);
  }

  isCorrectStep(playerMoving) {
    if (this.#bridgeAnswer[this.#correctStep] === playerMoving) {
      return true;
    }
    return false;
  }

  updateBridgeMap(playerMoving, isCorrect) {
    if (isCorrect) {
      this.#bridgeMap[playerMoving][this.#correctStep] = 'O';
    } else {
      this.#bridgeMap[playerMoving][this.#correctStep] = 'X';
    }
  }

  updateGameStatus(isCorrect) {
    if (isCorrect) {
      this.#correctStep += 1;
      if (this.#correctStep === this.#bridgeAnswer.length) {
        this.#gameStatus.isSuccess = true;
        this.#gameStatus.isFinished = true;
      }
    } else {
      this.#gameStatus.isFinished = true;
    }
  }
}

module.exports = BridgeGame;
