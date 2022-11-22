/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
//- `BridgeGame`에 필드(인스턴스 변수)를 추가할 수 있다.
// - `BridgeGame`의 파일 경로는 변경할 수 있다.
// - `BridgeGame`의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
// - 게임 진행을 위해 필요한 메서드를 추가 하거나 변경할 수 있다.
// - `BridgeGame` 클래스에서 `InputView`, `OutputView` 를 사용하지 않는다.

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  
  move(answer, bridge, currentIndex) {
    if (bridge[currentIndex] != answer) { return -1; }

    if (this.checkIfPlayerWins(bridge, currentIndex)) { return 0; }
    
    return 1;
  }

  checkIfPlayerWins(bridge, index) {
    return bridge.length-1 == index;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(answer) {
    return answer == "R";
  }
}

module.exports = BridgeGame;

