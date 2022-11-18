class BridgeSizeValid {
  #answer;

  constructor(answer) {
    this.validate(answer);
    this.#answer = answer;
  }

  validate(answer) {
    if (Number.isNaN(answer) === true) {
      throw new Error();
    }
    if (answer%1!==0) {
      throw new Error();
    }
    if (answer<3 || answer>20) {
      throw new Error();
    }
  }

  getSize() {
    return this.#answer;
  }
}

module.exports = BridgeSizeValid;