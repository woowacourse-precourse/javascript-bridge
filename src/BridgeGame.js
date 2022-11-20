// TODO: Bridge 클래스랑 합쳐보기
// TODO: 정답 다리를 저장하는 프로퍼티를 answer로 만들어보기
class BridgeGame {
  #answer;
  currentPosition;
  totalTrial;

  constructor(bridge) {
    this.#answer = bridge;
    this.currentPosition = 0;
    this.totalTrial = 1;
  }

  move() {
    if (this.currentPosition < this.#answer.length) this.currentPosition += 1;
  }

  retry() {
    this.totalTrial += 1;
    this.currentPosition = 0;
  }

  getCorrectDirection() {
    return this.#answer[this.currentPosition];
  }

  getIsLastPosition() {
    return this.currentPosition === this.#answer.length;
  }

  getTotalTrial() {
    return this.totalTrial;
  }

  // TODO: 다리 건너는 과정 찍어주는 로직 변경해보기
  getCrossState(state) {
    if (state === "failed")
      return [
        ...this.#answer.filter((v, i) => i < this.currentPosition),
        `X${this.#answer[this.currentPosition]}`,
      ];

    return this.#answer.filter((v, i) => i < this.currentPosition);
  }
}

module.exports = BridgeGame;
