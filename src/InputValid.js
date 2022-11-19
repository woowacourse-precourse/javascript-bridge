const MOVE_VALID = ['U', 'D']

class BridgeSizeValid {
  #answer;

  constructor(answer) {
    this.validate(answer);
    this.#answer = answer;
  }

  validate(answer) {
    if (Number.isNaN(answer) === true) {
      throw new Error('[ERROR] 숫자 아님');
    }
    if (answer%1!==0) {
      throw new Error('[ERROR] 정수 아님');
    }
    if (answer<3 || answer>20) {
      throw new Error('[ERROR] 범위 밖임');
    }
  }

  getSize() {
    return this.#answer;
  }
}

class MovingValid {
  #answer;

  constructor(answer) {
    this.validate(answer);
    this.#answer = answer;
  }

  validate(answer) {
    if(!MOVE_VALID.includes(answer)) {
      throw new Error('[ERROR] 유효하지 않은 입력');
    }
  }

  getMove() {
    return this.#answer;
  }
}

module.exports = { BridgeSizeValid, MovingValid };