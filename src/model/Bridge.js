class Bridge {
  #answerArray;

  get answerArray() {
    return this.#answerArray;
  }

  setAnswerArray(value) {
    this.#answerArray = value;
  }
}

module.exports = Bridge;
