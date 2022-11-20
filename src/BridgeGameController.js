const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

const BridgeGameController = {
  getSize(value) {
    this.bridgeSize = Number(value);
    this.bridgeMap = [];
    this.getRightBlocks();
  },
  getMoving(block, index) {
    this.chooseBlock = block;
    this.mapData(index);
    return this.isPass;
  },
  getRightBlocks() {
    this.rightBlocks = BridgeMaker.makeBridge(
      this.bridgeSize,
      BridgeRandomNumberGenerator
    );
  },
  mapData(index) {
    this.getMove(index);
    if (this.isPass) this.bridgeMap.push('O');
    if (this.isPass === false) {
      this.bridgeMap.push('X');
    }
  },
  getMove(index) {
    this.isPass = new BridgeGame().move(
      this.chooseBlock,
      this.rightBlocks[index]
    );
  },
};

module.exports = BridgeGameController;
