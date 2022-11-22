const InputView = require("./InputView");
const OutputView = require("./OutputView");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor(bridge) {
    this.bridge = bridge;
    this.userMove = [];
    this.nowstep = -1;
    this.tryCount = 1;
    this.isWin = false;
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
      this.nowstep += 1;
      this.userMove.push(nextStep);
      OutputView.printMap(this.bridge, this.nowstep, this.isFail());
      if (!this.isEnd()) {
        this.move();
      }
      return;
    });
  }

  /**
   * 게임 종료 여부 확인 메서드
   */
  isEnd() {
    if (this.isFail()) {
      console.log("패배");
      return true;
    }
    if (this.bridge.length === this.userMove.length) {
      this.isWin = true;
      this.gameEnd();
      return true;
    }
    return false;
  }

  isFail() {
    return this.bridge[this.nowstep] != this.userMove[this.nowstep];
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.tryCount += 1;
    this.nowstep = -1;
    this.userMove = [];
    this.move();
  }

  gameEnd() {
    OutputView.printResult(
      this.bridge,
      this.nowstep,
      this.isWin,
      this.tryCount
    );
  }
}

module.exports = BridgeGame;
