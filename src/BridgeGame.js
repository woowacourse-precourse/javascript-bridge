/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor() {
    this.round = 0;
    this.upResult = [];
    this.downResult = [];
  }

  setRound() {
    this.round++;
  }

  getRound() {
    return this.round;
  }

  setUpResult(round, correct) {
    if (correct) {
      this.upResult[round] = " O ";
    } else {
      this.upResult[round] = " X ";
    }
  }

  setDownResult(round, correct) {
    if (correct) {
      this.downResult[round] = " O ";
    } else {
      this.downResult[round] = " X ";
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
        this.setUpResult(round, true);
        this.downResult.push("   ");
      } else {
        this.setUpResult(round, false);
        this.downResult.push("   ");
      }
    } else if (movement === "D") {
      if (movement == bridgeUD[round]) {
        this.setDownResult(round, true);
        this.upResult.push("   ");
      } else {
        this.setDownResult(round, false);
        this.upResult.push("   ");
      }
    }

    console.log(this.getUpResult());
    console.log(this.getDownResult());
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
