const { MissionUtils } = require("@woowacourse/mission-utils");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  tryCnt;
  currentIdx;
  isPlaying;

  constructor(bridge) {
    this.tryCnt = 0;
    this.bridge = bridge;
    this.isPlaying = true;
    this.currentIdx = 0;
  }

  gameController() {
    if (this.isPlaying) {
      console.log("move");

      this.move();
    }
    if (!this.isPlaying) {
      console.log("retry");

      this.retry();
    }
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  move() {
    return new Promise((resolve, reject) => {
      console.log("move in");

      const direction = InputView.readMoving().then((result) => {
        this.gameCheck(result);
      });
    });
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  async retry() {
    console.log("retry in");

    const goGame = await InputView.readGameCommand();
    console.log(`go gmae: ${goGame}`);
    if (goGame === "R") {
      this.tryCnt++;
      this.isPlaying = true;
      this.gameController();

      return;
    }
    if (goGame === "Q") {
      OutputView.printResult("[]", false, this.tryCnt);
    }
  }

  async gameCheck(direction) {
    console.log("gamecheck");
    this.isPlaying = false;

    // direction === this.bridge[this.currentIdx];
    this.gameController();
  }
}

module.exports = BridgeGame;
