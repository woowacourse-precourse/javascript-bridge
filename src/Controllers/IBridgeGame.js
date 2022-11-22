class IBridgeGame {
  constructor() {
    if (this.constructor === IBridgeGame) {
      throw new Error('인터페이스 클래스로 인스턴스를 생성하였습니다.');
    }
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {
    throw new Error('인터페이스 클래스입니다. 메서드 구현이 필요합니다.');
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    throw new Error('인터페이스 클래스입니다. 메서드 구현이 필요합니다.');
  }
}

module.exports = IBridgeGame;
