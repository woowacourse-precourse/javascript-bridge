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
    this.tryCount = 1;
  }

  generateOfBridgeGamePassword(bridgeLength) {
    this.#password = BridgeMaker.makeBridge(bridgeLength, BridgeRandomNumberGenerator.generate);
  }

  move(userMovingInput) {
    this.userInput.push(userMovingInput);
  }

  drawingBridge() {
    const bridge = this.readyForDrawingBridge(this.userInput, this.#password);
    return this.bridgeToStringConverter(bridge);
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

  bridgeToStringConverter(vanilaBridge) {
    const convertedBridge = vanilaBridge.map(side => {
      return '[' + side.join('|') + ']';
    });
    return convertedBridge;
  }

  gameSuccessStatus() {
    return JSON.stringify(this.userInput) === JSON.stringify(this.#password);
  }

  isMovable() {
    return this.userInput[this.userInput.length - 1] === this.#password[this.userInput.length - 1];
  }

  retry(userChoice) {
    if (userChoice === 'R') {
      this.userInput = [];
      this.tryCount += 1;
      return true;
    }
    return false;
  }
}
module.exports = BridgeGame;
