const { Console } = require("@woowacourse/mission-utils");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor(mainController) {
    this.mainController = mainController;
  }

  /**
   * 이동에 따른 결과를 출력한다.
   * @param userMoving {string[]} [유저 이동 기록]
   */
  displayCaseResult(userMoving) {
    this.mainController.displayCaseResult(userMoving);
  }

  /**
   * 유저의 재시작 여부에 따라 동작을 수행한다.
   * @param userRestartInput {string} [유저 재시작 여부]
   * @param userMoving {string[]} [유저 이동기록]
   */
  processUserRestartInput(userRestartInput, userMoving) {
    if (userRestartInput === "R") this.retry();
    if (userRestartInput === "Q") this.finishGame(userMoving, false);
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {}

  /**
   * 최종결과 출력 후 게임을 종료한다.
   * @param userMoving {string[]} [유저 이동기록]
   * @param isSuccess {boolean} [최종 성공여부]
   */
  finishGame(userMoving, isSuccess) {
    this.mainController.displayFinalResult(userMoving, isSuccess);
    Console.close();
  }

  // 사용자가 게임을 다시 시도할 때 사용하는 메서드
  retry() {
    this.mainController.restartGame();
  }
}

module.exports = BridgeGame;
