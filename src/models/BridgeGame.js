const { validateMoveInput } = require("../utils/validators/validators");

/**
 * 다리 건너기 게임을 관리하는 클래스,
 * inputView, OutputView 사용 금지
 */
class BridgeGame {
  constructor() {
    this.bridgeSize;
    this.done = false;
    this.succeed = false;
    this.playerLocation = 0;
    this.try = 1;
    this.progress = [[], []]; // playerLocation[0] = up, playerLocation[1] = down
  }

  /**
   * 플레이어가 칸을 이동하게 하는 함수
   * @param {*} input 사용자의 입력 ("U" | "D")
   * @param {*} bridge 현재 만들어진 다리 (정답)
   */
  move(input, bridge) {
    const roundResult = bridge[this.playerLocation] === input;
    if (roundResult) {
      this.playerLocation += 1;
      this.progress = this.updateProgress(roundResult, this.progress, input);
    } else {
      this.progress = this.updateProgress(roundResult, this.progress, input);
    }
  }

  /**
   * 사용자의 이동 결과에 따른 현재 진행 상황(progress)을 업데이트하는 함수
   * @param {*} roundResult 이동 결과 (성공 시 true, 실패 시 false)
   * @param {*} progress 현재 진행 상황 (progress)
   * @param {*} input 사용자의 입력
   * @returns 업데이트 된 현재 진행 상황 (progress)
   */
  updateProgress(roundResult, progress, input) {
    if (roundResult) {
      progress = this.success(progress, input);
    } else {
      progress = this.fail(progress, input);
      this.done = true;
    }
    return progress;
  }

  /**
   * 사용자가 이동에 성공했을 때 현재 진행 상황 업데이트
   * @param {*} progress 현재 진행상황
   * @param {*} input 사용자의 입력
   * @returns 업데이트 된 현재 진행 상황 (progress)
   */
  success(progress, input) {
    if (input === "U") {
      progress[0].push("O");
      progress[1].push(" ");
      return progress;
    }
    progress[0].push(" ");
    progress[1].push("O");
    return progress;
  }

  /**
   * 사용자가 이동에 실패했을 때 현재 진행 상황 업데이트
   * @param {*} progress 현재 진행상황
   * @param {*} input 사용자의 입력
   * @returns 업데이트 된 현재 진행 상황 (progress)
   */
  fail(progress, input) {
    if (input === "U") {
      progress[0].push("X");
      progress[1].push(" ");
      return progress;
    }
    progress[0].push(" ");
    progress[1].push("X");
    return progress;
  }

  playerMoving(game, input, bridge) {
    validateMoveInput(input);
    game.move(input, bridge);
  }
  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.try += 1;
    this.done = false;
    this.progress[0].length = 0;
    this.progress[1].length = 0;
    this.playerLocation = 0;
  }
}

module.exports = BridgeGame;
