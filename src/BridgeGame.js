const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #password;
  constructor() {
    this.#password;
    this.userInput = [];
  }

  generateOfBridgeGamePassword(bridgeLength) {
    this.#password = BridgeMaker.makeBridge(bridgeLength, BridgeRandomNumberGenerator.generate);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(userMovingInput) {
    this.userInput.push(userMovingInput);
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}

  drawingBridge() {
    const bridge = this.readyForDrawingBridge(this.userInput, this.#password);
    return this.bridgeToStringConverter(bridge);
  }

  bridgeToStringConverter(vanilaBridge) {
    const convertedBridge = vanilaBridge.map(side => {
      return '[' + side.join('|') + ']';
    });
    return convertedBridge;
  }

  readyForDrawingBridge(userMoveCollection, password) {
    const upside = [];
    const downside = [];
    userMoveCollection.forEach((movingInput, index) => {
      if (movingInput === password[index]) {
        if (movingInput === 'U') {
          upside.push(' O ');
          downside.push('   ');
        }
        if (movingInput === 'D') {
          upside.push('   ');
          downside.push(' O ');
        }
      }
      if (movingInput !== password[index]) {
        if (movingInput === 'U') {
          upside.push(' X ');
          downside.push('   ');
        }
        if (movingInput === 'D') {
          upside.push('   ');
          downside.push(' X ');
        }
      }
    });
    return [upside, downside];
  }

  gameSuccessStatus() {
    return JSON.stringify(this.userInput) === JSON.stringify(this.#password);
  }
}
module.exports = BridgeGame;
