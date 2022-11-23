const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const gameConst = require("./const");

class BridgeGame {
  realBridge;
  userBridge;
  curr;
  tryCnt;

  constructor() {
    this.userBridge = { up: [], down: [] };
    this.curr = 0;
    this.tryCnt = 1;
  }

  makeRealBridge(size) {
    this.realBridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
  }

  move(cmd) {
    const MARK = this.realBridge[this.curr] === cmd ? gameConst.sign.O_SIGN : gameConst.sign.X_SIGN;
    const MARK_ARR = cmd == gameConst.cmd.UP_CMD ? this.userBridge.up : this.userBridge.down;
    const BLANK_ARR = cmd == gameConst.cmd.UP_CMD ? this.userBridge.down : this.userBridge.up; 

    MARK_ARR.push(MARK);
    BLANK_ARR.push(gameConst.sign.BLANK_SIGN);
    this.curr += 1;
    return MARK;
  }

  retry() {
    this.userBridge.down = [];
    this.userBridge.up = [];
    this.curr = 0;
    this.tryCnt += 1;
  }

  ifFinish(){
    return (this.realBridge.length <= this.curr);
  }
}

module.exports = BridgeGame;
