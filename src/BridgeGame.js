const OutputView = require("./OutputView");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moveInput, madeBridge, moveArray) {
    const count = moveArray[0].length;
    if (moveInput === madeBridge[count]) {
      moveInput === 'U' ? moveArray[0].push('O') : moveArray[1].push('O');
      moveInput === 'U' ? moveArray[1].push(' ') : moveArray[0].push(' ');
    }
    if (moveInput !== madeBridge[count]) {
      moveInput === 'U' ? moveArray[0].push('X') : moveArray[1].push('X');
      moveInput === 'U' ? moveArray[1].push(' ') : moveArray[0].push(' ');
    }
    
    return moveArray;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(userDecision) {
    if (userDecision === 'R') return true;

    return false;
  }
}

module.exports = BridgeGame;
