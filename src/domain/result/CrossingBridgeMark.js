const BridgeDirection = require('../bridge/BridgeDirection');

class CrossingBridgeMark {
  static #MARK = {
    pass: 'O',
    fail: 'X',
    empty: ' ',
  };

  static #PASS_MARK = {
    U: { up: this.#MARK.pass, down: this.#MARK.empty },
    D: { up: this.#MARK.empty, down: this.#MARK.pass },
  };

  static #FAIL_MARK = {
    U: { up: this.#MARK.fail, down: this.#MARK.empty },
    D: { up: this.#MARK.empty, down: this.#MARK.fail },
  };

  static marks({ direction, isPassed }) {
    return isPassed
      ? CrossingBridgeMark.#passMarks(direction)
      : CrossingBridgeMark.#failMarks(direction);
  }

  static #passMarks(direction) {
    return CrossingBridgeMark.#PASS_MARK[direction] ?? BridgeDirection.validate(direction);
  }

  static #failMarks(direction) {
    return CrossingBridgeMark.#FAIL_MARK[direction] ?? BridgeDirection.validate(direction);
  }
}

module.exports = CrossingBridgeMark;
