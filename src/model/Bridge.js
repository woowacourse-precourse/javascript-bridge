/**
 * 다리 건너기 게임의 정답을 저장하는 도메인
 */
class Bridge {
  /** @type {string[]} #answerArray - 다리 건너기 게임의 정답을 ['U','D'] 와 같은 식으로 저장하는 필드 */
  #answerArray;

  get answerArray() {
    return this.#answerArray;
  }

  /**
   * 생성된 다리 건너기 게임의 정답 배열을 저장하는 메소드
   * @param {string[]} value
   */
  setAnswerArray(value) {
    this.#answerArray = value;
  }
}

module.exports = Bridge;
