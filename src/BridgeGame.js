const CORRECT_MOVING = ' O ';
const INCORRECT_MOVING = ' X ';
const NONE_MOVING = '   ';

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  constructor() {
    this.bridge;
    this.nowMap = {
      'U': [],
      'D': []
    };
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   * 
   */
  move(movingInfo) {
    const compareIndex = this.nowMap['U'].length;
    const other = movingInfo === 'U' ? 'D' : 'U';

    const pushString = this.bridge[compareIndex] === movingInfo ? CORRECT_MOVING : INCORRECT_MOVING;
    const returnTF = this.bridge[compareIndex] === movingInfo ? true : false;

    this.nowMap[movingInfo].push(pushString);
    this.nowMap[other].push(NONE_MOVING);
    return returnTF;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.nowMap = {
      'U': [],
      'D': []
    }
  }
}

module.exports = BridgeGame;
