/**
 * 다리 건너기 게임의 정보를 저장한다.
 */
class BridgeGame {
  #bridge     // 생성된 다리 정보
  #curr       // 현재까지 기록
  #try        // 현재까지 시도 횟수

  constructor(bridge) {
    this.#bridge = bridge;
    this.#curr = new Array();
    this.#try = 1;
  }
  
  /**
   * 입력받은 방향에 맞게 curr를 갱신
   * @param {char} input 현재 라운드의 이동 방향 문자 
   */
  move(input) {
    this.#curr.push(input);
  }

  /**
   * 현재까지 기록의 마지막 성공 여부를 반환
   * @returns {boolean} 마지막 라운드 성공 여부
   */
  getLastRoundResult() {
    return this.#curr.length > 0 && this.#bridge[this.#curr.length-1] == this.#curr[this.#curr.length-1];
  }

  /**
   * 다리 끝에 도착 여부 반환
   * @return {boolean} bridge의 길이와 curr의 길이가 같고, 마지막 시도가 성공이면 true, 아니면 false
   */
  isArrived() {
    return this.#bridge.length == this.#curr.length && this.#bridge[this.#curr.length-1] == this.#curr[this.#curr.length-1];
  }

  /**
   * 현재까지 위쪽 다리 기록을 문자열로 반환
   * @returns {string} 위쪽 다리 기록
   */
  stateUpperToString() {
    let upper = '[';
    for(let i=0; i<this.#curr.length-1; i++) {
      upper += this.#curr[i] == 'U' ? ' O |' : '   |';
    }
    const mark = this.getLastRoundResult() ? ' O ]' : ' X ]';
    upper += this.#curr[this.#curr.length-1] == 'U' ? mark : '   ]';
    return upper;
  }

  /**
   * 현재까지 아래쪽 다리 기록을 문자열로 반환
   * @returns {string} 아래쪽 다리 기록
   */
  stateDownToString() {
    let down = '[';
    for(let i=0; i<this.#curr.length-1; i++) {
      down += this.#curr[i] == 'D' ? ' O |' : '   |';
    }
    const mark = this.getLastRoundResult() ? ' O ]' : ' X ]';
    down += this.#curr[this.#curr.length-1] == 'D' ? mark : '   ]';
    return down;
  }

  /**
   * 현재까지 위/아래 다리 기록을 반환 
   * @returns {array[string]} [위쪽 다리 기록, 아래쪽 다리 기록] 문자열 배열
   */
  stateToString() {
    return [this.stateUpperToString(), this.stateDownToString()];
  }

  /**
   * 게임 재시작시 현재까지 기록을 초기화하고 시도 횟수 1 증가
   */
  retry() {
    this.#curr = new Array();
    this.#try += 1;
  }

  /**
   * @returns {number} 현재까지 시도 횟수 반환
   */
  getTry() {
    return this.#try;
  }
}

module.exports = BridgeGame;
