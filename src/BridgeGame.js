const OutputView = require("./OutputView");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor() {
    this.round = 0;
    this.crossing = true;
    this.success = false;
    this.attempt = 1;
    this.upResult = [];
    this.downResult = [];
  }

  setSuccess() {
    this.success = true;
  }

  getSuccess() {
    return this.success;
  }

  setAttempt() {
    this.attempt++;
  }

  getAttempt() {
    return this.attempt;
  }

  setCross(cross) {
    if (cross) this.crossing = true;
    else if (!cross) this.crossing = false;
  }

  getCross() {
    return this.crossing;
  }

  setRound(reset) {
    if (reset) this.round = 0;
    else {
      this.round++;
    }
  }

  getRound() {
    return this.round;
  }

  setUpResult(reset, round, correct) {
    if (!reset) {
      if (correct) {
        this.upResult[round] = " O ";
      } else {
        this.upResult[round] = " X ";
        this.setCross(false);
      }
    } else if (reset) {
      this.upResult = [];
    }
  }

  setDownResult(reset, round, correct) {
    if (!reset) {
      if (correct) {
        this.downResult[round] = " O ";
      } else {
        this.downResult[round] = " X ";
        this.setCross(false);
      }
    } else if (reset) {
      this.downResult = [];
    }
  }

  getUpResult() {
    return this.upResult;
  }

  getDownResult() {
    return this.downResult;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(movement, bridge) {
    const bridgeUD = bridge.getBridge();
    let round = this.getRound();

    if (movement == "U") {
      if (movement == bridgeUD[round]) {
        this.setUpResult(false, round, true);
        this.downResult.push("   ");
      } else {
        this.setUpResult(false, round, false);
        this.downResult.push("   ");
        this.setCross(false);
      }
    } else if (movement === "D") {
      if (movement == bridgeUD[round]) {
        this.setDownResult(false, round, true);
        this.upResult.push("   ");
      } else {
        this.setDownResult(false, round, false);
        this.upResult.push("   ");
        this.setCross(false);
      }
    }

    this.setRound();

    if (bridgeUD.length == this.getRound() && this.getCross() == true) {
      console.log("su");
      this.setSuccess();
    }

    OutputView.printMap(this.getUpResult(), this.getDownResult());
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  reset() {
    this.setRound(true);
    this.setCross(true);
    this.setUpResult(true);
    this.setDownResult(true);
  }

  retry(restart) {
    if (restart === "R") {
      this.reset();
      this.setAttempt();
    }
  }
}

module.exports = BridgeGame;
