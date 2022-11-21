class Bridge {
  #answerArray;

  get answerArray() {
    return this.#answerArray;
  }

  set answerArray(value) {
    this.#answerArray = value;
  }
}

module.exports = Bridge;
