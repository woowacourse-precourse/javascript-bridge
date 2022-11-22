const { Console } = require("@woowacourse/mission-utils");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #mainController;

  constructor(mainController) {
    this.#mainController = mainController;
  }

  /**
   * 이동에 따른 결과를 출력한다.
   * @param userMoving {string[]} [유저 이동 기록]
   */
  displayCaseResult(userMoving) {
    this.#mainController.displayCaseResult(userMoving);
  }

  /**
   * 유저의 재시작 여부에 따라 동작을 수행한다.
   * @param userRestartInput {string} [유저 재시작 여부]
   * @param userMoving {string[]} [유저 이동기록]
   */
  processRestart(userRestartInput, userMoving) {
    if (userRestartInput === "R") this.retry();
    if (userRestartInput === "Q") this.finishGame(userMoving, false);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * @param isSuccess {boolean} [최종 성공유무]
   * @param isFinished {boolean} [움직임 종료유무]
   * @param userMoving {string[]} [유저 이동기록]
   */
  move(isSuccess, isFinished, userMoving) {
    this.displayCaseResult(userMoving);
    if (!isSuccess) this.#mainController.readUserRestartInput(userMoving);
    if (isSuccess && isFinished) this.finishGame(userMoving, true);
    if (isSuccess && !isFinished) this.#mainController.readUserMovingInput();
  }

  /**
   * 최종결과 출력 후 게임을 종료한다.
   * @param userMoving {string[]} [유저 이동기록]
   * @param isSuccess {boolean} [최종 성공여부]
   */
  finishGame(userMoving, isSuccess) {
    this.#mainController.displayFinalResult(userMoving, isSuccess);
    Console.close();
  }

  // 사용자가 게임을 다시 시도할 때 사용하는 메서드
  retry() {
    this.#mainController.restartGame();
  }
}

module.exports = BridgeGame;
