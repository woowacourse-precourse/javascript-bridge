const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const Bridge = require('../Bridge');

class BridgeModel {

  constructor() {
    this.tryCount = 1;
    this.moveCount = 0;
    this.isRight = false;
  }

  updateState(direction, isRight) {
    this.moveCount++;
    this.isRight = isRight;
  }

  buildBridge(length) {
    const { generate } = BridgeRandomNumberGenerator
    const randomArray = BridgeMaker.makeBridge(length, generate);
    this.bridge = new Bridge(randomArray);
    console.log(this.bridge.answer);
  }

  stepForward(direction) {
    const [isRight, isDone] = this.bridge.checkAnswer(this.moveCount, direction);
    updateState(direction, isRight);
    return [isRight, isDone];
  }

}

module.exports = BridgeModel;
