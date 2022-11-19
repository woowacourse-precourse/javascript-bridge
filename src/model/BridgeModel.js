const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const { DIRECTION } = require('../constants');
const Bridge = require('../Bridge');

class BridgeModel {

  constructor() {
    this.tryCount = 1;
    this.moveCount = 0;
    this.isRight = false;
    this.map = [[],[]];
  }

  updateState(direction, isRight) {
    this.moveCount++;
    this.isRight = isRight;
    this.paintMap(direction, isRight);
  }

  buildBridge(length) {
    const { generate } = BridgeRandomNumberGenerator
    const randomArray = BridgeMaker.makeBridge(length, generate);
    this.bridge = new Bridge(randomArray);
    console.log(this.bridge.answer);
  }

  stepForward(direction) {
    const [isRight, isDone] = this.bridge.checkAnswer(this.moveCount, direction);
    this.updateState(direction, isRight);
    return [isRight, isDone];
  }

  paintMap(direction, isRight) {
    this.map.forEach((path) => path.push(' '));
    this.map[DIRECTION[direction]].pop();
    switch(isRight){
      case(true):
        return this.map[DIRECTION[direction]].push('O');
      default:
        return this.map[DIRECTION[direction]].push('X');    
    }
  }

}

module.exports = BridgeModel;
