/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #myBridge;
  #nowState;

  constructor(bridgeMaker, makeRandomNumber) {
    this.#myBridge = bridgeMaker(makeRandomNumber());
    this.#nowState = 0;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(readMoving) {
    if (this.#myBridge[this.#nowState + 1] === readMoving()) return true;
    return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(readGameCommand) {
    const result = readGameCommand();
    // 결과 이용해 값 유효 여부 확인 후 로직 전개
  }
}

module.exports = BridgeGame;
