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
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {}

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
