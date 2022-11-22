const BridgeMaker = require("./BridgeMaker");
/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  #attempt;
  #round;
  #answer;
  #bridge;

  constructor() {
    this.#attempt = 1;
    this.#round = 0;
    this.#answer = [];
    this.#bridge = [[],[]];
  }

  setAnswer(size, generateRandomNumber) {
    this.#answer = BridgeMaker.makeBridge(size, generateRandomNumber);
  }

  setBridge(moveInput, answer) {
    const mark = answer ? 'O' : 'X';
    const space = ' ';
    if(moveInput === "U") {
      this.#bridge[0].push(mark);
      this.#bridge[1].push(space);
      return 
    };
    this.#bridge[0].push(space);
    this.#bridge[1].push(mark);
  }

  getRound() {
    return this.#round;
  }

  getEndRound() {
    return this.#answer.length;
  }

  drawBridge() {
    const upLine = this.#bridge[0].join(' | ');
    const downLine = this.#bridge[1].join(' | ');
    const result = {
      up: upLine,
      down: downLine,
    };
    return result;
  }

  drawGameResult() {
    const result = [];
    result.push(this.#attempt);
    result.push((this.#round === this.#answer.length) ? '성공' : '실패');
    return result;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(moveInput) {
    const round = this.#round + 1;
    const roundAnswer = this.#answer[this.#round];
    if (moveInput === roundAnswer) {
      this.#round = round;
      this.setBridge(moveInput, true);
      return true;
    }
    this.setBridge(moveInput, false);
    return false;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#round = 0;
    this.#bridge = [[],[]];
    this.#attempt++;
  }
}

module.exports = BridgeGame;
