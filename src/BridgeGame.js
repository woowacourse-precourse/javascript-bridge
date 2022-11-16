/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #bridge     // 생성된 다리 정보
  #curr       // 현재 플레이어 다리 위치
  #try        // 현재까지 시도 횟수

  constructor(bridge) {
    this.#bridge = [...bridge];
    this.#curr = 0;
    this.#try = 1;
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * @param {char} input 건너기를 시도한 방향 (U or D)
   * @return {boolean} 건너기 시도 성공시 true, 실패시 false
   */
  move(input) {
    const result = this.#bridge[this.#curr] == input;
    this.#curr += 1;
    return result;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * 현재 상태 정보를 초기화
   * 시도 횟수 + 1
   */
  retry() {
    this.#state = 0;
    this.#try += 1;
  }

  /**
   * 다리 끝에 도착 여부 반환
   * @return {boolean} bridge의 길이와 curr의 길이가 같으면 true, 다르면 false
   */
  isArrived() {
    return this.#bridge.length == this.#curr;
  }

  
}

module.exports = BridgeGame;
