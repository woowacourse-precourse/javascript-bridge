class CrossingBridge {
  static #MARK = {
    pass: 'O',
    fail: 'X',
    empty: ' ',
  };

  #up;

  #down;

  constructor() {
    this.initialize();
  }

  initialize() {
    this.#up = [];
    this.#down = [];
  }

  add({ direction, isPassed }) {
    const mark = isPassed ? CrossingBridge.#MARK.pass : CrossingBridge.#MARK.fail;

    if (direction === 'U') {
      this.#marking({ up: mark });
      return;
    }

    this.#marking({ down: mark });
  }

  #marking({ up = CrossingBridge.#MARK.empty, down = CrossingBridge.#MARK.empty }) {
    this.#up.push(up);
    this.#down.push(down);
  }

  print() {
    return `[ ${this.#up.join(' | ')} ]\n[ ${this.#down.join(' | ')} ]`;
  }

  size() {
    return this.#up.length;
  }
}

module.exports = CrossingBridge;
