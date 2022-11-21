/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

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
    const mark = this.realBridge[this.curr] === cmd ? "O" : "X";
    if (cmd === "U") {
      this.userBridge.up.push(mark);
      this.userBridge.down.push(" ");
    } else {
      this.userBridge.down.push(mark);
      this.userBridge.up.push(" ");
    }
    this.curr += 1;

    return mark;
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
