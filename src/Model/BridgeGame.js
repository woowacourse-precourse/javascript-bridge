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

}

module.exports = BridgeGame;
