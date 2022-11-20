/**
 * 다리 건너기 게임을 관리하는 클래스,
 * inputView, OutputView 사용 금지
 */
class BridgeGame {
  constructor() {
    this.bridge;
    this.done = false;
    this.succeed = false;
    this.playerLocation = 0;
    this.progress = [[], []]; // playerLocation[0] = up, playerLocation[1] = down
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(input, bridge) {
    if (bridge[this.playerLocation] === input) {
      this.playerLocation += 1;
      this.updateProgress(this.progress, input);
    }
  }

  updateProgress(progress, input) {
    if (input === "U") {
      progress[0].push("O");
      progress[1].push(" ");
    } else {
      progress[0].push(" ");
      progress[1].push("O");
    }
    return progress;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
