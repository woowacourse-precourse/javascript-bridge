class BridgeGame {
  #bridge;
  #marker = 0;
  #numberOfTry = 1;

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
      pushXToUBlock(UBlock, DBlock);
    }
    if (nextStep === 'D') {
      pushXToDBlock(UBlock, DBlock);
    }
    return [UBlock, DBlock];
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

  isFinish() {
    if (this.#marker === this.#bridge.length) {
      return true;
    }
    return false;
  }

  retry() {
    this.#marker = 0;
    this.#numberOfTry += 1;
  }

  getNumberOfTry() {
    return this.#numberOfTry;
  }
}

const pushXToUBlock = (UBlock, DBlock) => {
  UBlock.push('X');
  DBlock.push(' ');
};
const pushXToDBlock = (UBlock, DBlock) => {
  UBlock.push(' ');
  DBlock.push('X');
};

module.exports = BridgeGame;
