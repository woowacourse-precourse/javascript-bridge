const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const gameConst = require("../constant/constant.js");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
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
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
   move(cmd) {
    const MARK = this.realBridge[this.curr] === cmd ? gameConst.sign.O_SIGN : gameConst.sign.X_SIGN;
    const MARK_ARR = cmd == gameConst.cmd.UP_CMD ? this.userBridge.up : this.userBridge.down;
    const BLANK_ARR = cmd == gameConst.cmd.UP_CMD ? this.userBridge.down : this.userBridge.up; 

    MARK_ARR.push(MARK);
    BLANK_ARR.push(gameConst.sign.BLANK_SIGN);
    this.curr += 1;
    return MARK;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
   retry() {
    this.userBridge.down = [];
    this.userBridge.up = [];
    this.curr = 0;
    this.tryCnt += 1;
  }
}

module.exports = BridgeGame;
