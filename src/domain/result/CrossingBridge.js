const CrossingBridgeMark = require('./CrossingBridgeMark');

class CrossingBridge {
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
    this.#marking(CrossingBridgeMark.marks({ direction, isPassed }));
  }

  #marking({ up, down }) {
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
