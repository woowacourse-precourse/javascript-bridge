const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const { DIRECTION } = require('../constants');
const Bridge = require('../Bridge');

class BridgeModel {

  constructor() {
    this.tryCount = 1;
    this.init();
  }

  init() {
    this.moveCount = 0;
    this.map = [[],[]];
    this.isRight = false;
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
    if( direction === DIRECTION.UP ) {
      this.map[0].push(isRight ? 'O' : 'X');
      this.map[1].push(' ');
    }
    if( direction === DIRECTION.DOWN ) {
      this.map[1].push(isRight ? 'O' : 'X');
      this.map[0].push(' ');
    } 
  }
}

module.exports = BridgeModel;
