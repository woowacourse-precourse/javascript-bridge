const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #password;
  constructor() {
    this.userInput = [];
  }

  generateOfBridgeGamePassword(bridgeLength) {
    this.#password = BridgeMaker.makeBridge(
      bridgeLength,
      BridgeRandomNumberGenerator.generate,
    );
  }

  stackOfUserMovingInput(userMovingInput) {
    this.userInput.push(userMovingInput);
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {}
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}

  checkUserMovingInput() {
    if (
      this.userInput[this.userInput.length - 1] ===
      this.#password[this.userInput.length - 1]
    ) {
      return true;
    }
    return false;
  }

  drawingCorrectBridge(userMoveInputCollection) {
    const userMoveBridge = [['['], ['[']];
    userMoveInputCollection.forEach(movingInput => {
      if (movingInput === 'U') {
        userMoveBridge[0].push('O', '|');
        userMoveBridge[1].push(' ', '|');
      } else if (movingInput === 'D') {
        userMoveBridge[0].push(' ', '|');
        userMoveBridge[1].push('O', '|');
      }
    });
    return userMoveBridge;
  }

  drawingWrongBridge(userMoveInputCollection) {
    const userMoveBridge = [['['], ['[']];
    userMoveInputCollection.forEach(movingInput => {
      if (movingInput === 'U') {
        userMoveBridge[0].push('X', '|');
        userMoveBridge[1].push(' ', '|');
      } else if (movingInput === 'D') {
        userMoveBridge[0].push(' ', '|');
        userMoveBridge[1].push('X', '|');
      }
    });
    return userMoveBridge;
  }

  static bridgeCloseConverter(drawingBridge) {
    if (drawingBridge[drawingBridge.length - 1] === '|') {
      drawingBridge[drawingBridge.length - 1] = ']';
    }
    return drawingBridge;
  }
}

module.exports = BridgeGame;
