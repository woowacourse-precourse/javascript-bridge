/**
 * 다리 건너기 게임의 정답을 저장하는 도메인
 */
class Bridge {
  #answerArray;

  constructor(answerArray) {
    this.#answerArray = answerArray;
  }

  isThisTurnAnswer(turn) {
    return this.#answerArray[turn];
  }

  get answerArray() {
    return this.#answerArray;
  }
}

module.exports = Bridge;
