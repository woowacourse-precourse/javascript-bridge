/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge     // 생성된 다리 정보
  #curr       // 현재 상태 정보
  #try        // 현재까지 시도 횟수

  constructor(bridge) {
    this.#bridge = [...bridge];
    this.#curr = new Array();
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
   * 현재 상태 정보를 초기화
   * 시도 횟수 + 1
   */
  retry() {
    this.#curr = new Array();
    this.#try += 1;
  }
}

module.exports = BridgeGame;
