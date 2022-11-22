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

}

module.exports = BridgeGame;
