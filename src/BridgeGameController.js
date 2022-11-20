const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView = require('./OutputView');

const BridgeGameController = {
  getSize(value) {
    this.bridgeSize = Number(value);
    this.upper = [];
    this.lower = [];
    this.getRightBlocks();
  },
  getMoving(block, index) {
    this.chooseBlock = block;
    this.getMove(index);
    return this.isPass;
  },
  getRightBlocks() {
    this.rightBlocks = BridgeMaker.makeBridge(
      this.bridgeSize,
      BridgeRandomNumberGenerator
    );
  },
  getMove(index) {
    this.isPass = new BridgeGame().move(
      this.chooseBlock,
      this.rightBlocks[index]
    );
    if (this.isPass) this.passData();
    if (this.isPass === false) this.failData();
    this.mapOutputData();
  },
  passData() {
    if (this.isPass && this.chooseBlock === 'U') {
      this.upper.push('O');
      this.lower.push(' ');
    }
    if (this.isPass && this.chooseBlock === 'D') {
      this.upper.push(' ');
      this.lower.push('O');
    }
  },
  failData() {
    if (this.isPass === false && this.chooseBlock === 'U') {
      this.upper.push('X');
      this.lower.push(' ');
    }
    if (this.isPass == false && this.chooseBlock === 'D') {
      this.upper.push(' ');
      this.lower.push('X');
    }
  },
  mapOutputData() {
    OutputView.printMap(this.upper, this.lower);
  },
};

module.exports = BridgeGameController;
