const InputView = require("./InputView");
const OutputView = require("./OutputView");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor(bridge) {
    this.bridge = bridge;
    this.userMove = [];
    this.stepCount = -1;
  }

  gamePlay() {
    console.log(this.bridge);
    this.move();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    InputView.readMoving((nextStep) => {
      this.stepCount += 1;
      this.userMove.push(nextStep);
      if (!this.isEnd()) {
        OutputView.printMap(this.bridge, this.stepCount, false);
        this.move();
      }
    });
  }

  /**
   * 게임 종료 여부 확인 메서드
   */
  isEnd() {
    if (this.bridge === this.userMove) {
      console.log("승리");
      return true;
    }
    if (this.bridge[this.stepCount] != this.userMove[this.stepCount]) {
      console.log("패배");
      return true;
    }
    return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
