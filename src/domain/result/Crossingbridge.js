class CrossingBridge {
  static #MARK = {
    success: 'O',
    fail: 'X',
    empty: ' ',
  };

  #up = [];

  #down = [];

  add({ direction, isSuccessed }) {
    if (isSuccessed) {
      this.#successedMark(direction);
      return;
    }

    this.#failedMark(direction);
  }

  #successedMark(direction) {
    if (direction === 'U') {
      this.#marking({ up: CrossingBridge.#MARK.success });
      return;
    }

    this.#marking({ down: CrossingBridge.#MARK.success });
  }

  #failedMark(direction) {
    if (direction === 'U') {
      this.#marking({ down: CrossingBridge.#MARK.fail });
      return;
    }

    this.#marking({ up: CrossingBridge.#MARK.fail });
  }

  #marking({ up = CrossingBridge.#MARK.empty, down = CrossingBridge.#MARK.empty }) {
    this.#up.push(up);
    this.#down.push(down);
  }

  print() {
    return `[ ${this.#up.join(' | ')} ]\n[ ${this.#down.join(' | ')} ]`;
  }

  size() {

  }
}

module.exports = CrossingBridge;
