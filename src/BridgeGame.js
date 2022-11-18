class BridgeGame {
  #bridge;
  #marker = 0;

  constructor(bridge) {
    this.#bridge = bridge;
  }

  move(nextStep) {
    if (nextStep === this.#bridge[this.#marker]) {
      this.#marker += 1;
      return [this.getUBlock(), this.getDBlock()];
    } else {
      return this.wrongStep(nextStep, this.getUBlock(), this.getDBlock());
    }
  }

  wrongStep(nextStep, UBlock, DBlock) {
    if (nextStep === 'U') {
      UBlock.push('X');
      DBlock.push(' ');
      return [UBlock, DBlock];
    }
    if (nextStep === 'D') {
      UBlock.push(' ');
      DBlock.push('X');
      return [UBlock, DBlock];
    }
  }

  getUBlock() {
    let UBlock = [];
    for (let i = 0; i < this.#marker; i++) {
      if (this.#bridge[i] === 'U') UBlock.push('O');
      if (this.#bridge[i] === 'D') UBlock.push(' ');
    }
    return UBlock;
  }

  getDBlock() {
    let DBlock = [];
    for (let i = 0; i < this.#marker; i++) {
      if (this.#bridge[i] === 'D') DBlock.push('O');
      if (this.#bridge[i] === 'U') DBlock.push(' ');
    }
    return DBlock;
  }

  retry() {}
}

module.exports = BridgeGame;
