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
    const mark = this.realBridge[this.curr] === cmd ? gameConst.sign.O_SIGN : gameConst.sign.X_SIGN;
    if (cmd === "U") {
      this.userBridge.up.push(mark);
      this.userBridge.down.push(gameConst.sign.BLANK_SIGN);
    } else {
      this.userBridge.down.push(mark);
      this.userBridge.up.push(gameConst.sign.BLANK_SIGN);
    }
    this.curr += 1;

    return mark;
  }

  retry() {
    this.userBridge.down = [];
    this.userBridge.up = [];
    this.curr = 0;
    this.tryCnt += 1;
  }
}

module.exports = BridgeGame;
