/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge     // 생성된 다리 정보
  #curr       // 현재 상태 정보
  #try        // 현재까지 시도 횟수

  constructor(bridge) {
    this.#bridge = [...bridge];
    this.#curr = [];
    this.#try = 1;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * 입력받은 방향(U or D)에 따라
   * 이동 가능한 칸일 경우 true, 불가능한 칸일 경우 false를 현재 상태에 업데이트 하고 반환
   */
  move(input) {
    if(this.#bridge[this.#curr.length] == input) {
      this.#curr.push(true);
      return true;
    }
    this.#curr.push(false);
    return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
