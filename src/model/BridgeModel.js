const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const Bridge = require('../Bridge');

class BridgeModel {

  constructor() {
    this.moveCount = 0;
  }

  buildBridge(length) {
    const { generate } = BridgeRandomNumberGenerator
    const randomArray = BridgeMaker.makeBridge(length, generate);
    this.bridge = new Bridge(randomArray);
    console.log(this.bridge.answer);
  }

  stepForward(direction) {
    const [isRight, isDone] = this.bridge.checkAnswer(this.moveCount, direction);
    this.moveCount++;
    return [isRight, isDone];
  }

}

module.exports = BridgeModel;
