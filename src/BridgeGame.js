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

  checkUserMovingInput() {
    if (this.userInput[this.userInput.length - 1] === this.#password[this.userInput.length - 1]) {
      return true;
    }
    return false;
  }
  // [[upper, lower]]
  forDrawingBridge(userInput, password) {
    const arr = userInput.map((input, index) => (input === password[index] ? [input, true] : [input, false]));
    return arr;
  }
  // [input, true]
  drawingBridge() {
    const result = this.forDrawingBridge(this.userInput, this.#password);
    const resultResult = result.map(userInputAndResult => {
      this.moveYesOrNO(userInputAndResult);
    });
    return this.finalConvert(resultResult);
  }

  finalConvert(result) {
    const upside = result.map(upAndDown => upAndDown[0]);
    const downside = result.map(upAndDown => upAndDown[0]);
    return [upside, downside];
  }
  // [input, true]

  moveYesOrNO(result) {
    const movable = result[1];
    if (result[0] === 'U') {
      return this.drawingUpperBridge(movable);
    } else {
      return this.drawingLowerBridge(movable);
    }
  }
  //true
  drawingUpperBridge(movable) {
    const UpperBridge = [];
    const lowerBridge = [];
    if (movable === true) {
      UpperBridge.push('O');
      lowerBridge.push(' ');
    } else {
      UpperBridge.push('X');
      lowerBridge.push(' ');
    }
    return [UpperBridge, lowerBridge];
  }
  drawingLowerBridge(movable) {
    const UpperBridge = [];
    const lowerBridge = [];
    if (movable === true) {
      UpperBridge.push(' ');
      lowerBridge.push('O');
    } else {
      UpperBridge.push(' ');
      lowerBridge.push('X');
    }
    return [UpperBridge, lowerBridge];
  }

  gameSuccessStatus() {
    return JSON.stringify(this.userInput) === JSON.stringify(this.#password);
  }
}
module.exports = BridgeGame;
