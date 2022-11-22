const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require ('../BridgeRandomNumberGenerator');

class BridgeGame {
  constructor() {
    this.moving = [];
    this.bridge = [];
    this.count = 1;
  }
  move(input) {
    this.moving.push(input);
  }

  getMap() {
    const upMap = this.getFloorMap('U');
    const downMap = this.getFloorMap('D');
    return {upMap, downMap};
  }

  canMove() {
    if (this.moving.length === 0 || this.bridge.length === 0) return;

    const currentMove = this.moving[this.moving.length - 1];
    const cuurrentFloor = this.bridge[this.moving.length - 1];

    return currentMove === cuurrentFloor;
  }

  checkDone() {
    return this.moving.length === this.bridge.length;
  }

  makeBridge(length) {
    this.bridge = BridgeMaker.makeBridge(length, BridgeRandomNumberGenerator.generate);
  }

  getFloorMap(type) {
    const floormap = this.moving.map((item, index) => {
      if (item !== type) return ' ';
      if (item !== this.bridge[index]) return 'X';
      if (item === this.bridge[index]) return 'O';
    }); 

    return `[ ${floormap.join(' | ')} ]`;
  }

  retry() {
    this.moving = [];
    this.count++;
  }

  getResult() {
    const isCompleted = this.canMove() && this.checkDone() ? '성공' : '실패';
    const count = String(this.count);

    return { isCompleted, count };
  }
}

module.exports = BridgeGame;
