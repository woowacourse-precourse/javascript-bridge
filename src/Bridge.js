const BridgeMaker = require('./BridgeMaker');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class Bridge {
  #pattern;
  #distance;
  #history;
  #tryCount;

  constructor () {
    this.#distance = 0;
    this.#tryCount = 1;
    this.#history = { up: [], down: [] };
  }

  createPattern (moveGame) {
    OutputView.printStart();
    InputView.readBridgeSize(moveGame, this.setPattern.bind(this), BridgeMaker.makeBridge);
  }

  setPattern (pattern) {
    console.log(pattern);
    this.#pattern = pattern;
  }

  askNextStep (retryGame) {
    InputView.readMoving(retryGame, this.moveMap.bind(this));
  }

  moveMap (retryGame, chooseStep) {
    if (this.#pattern[this.#distance] !== chooseStep) {
      if (chooseStep === 'U') {
        this.#history.up.push('X');
        this.#history.down.push(' ');
      } else {
        this.#history.up.push(' ');
        this.#history.down.push('X');
      }
      OutputView.printMap(this.#history);
      return retryGame();
    }
    if (chooseStep === 'U') {
      this.#history.up.push('O');
      this.#history.down.push(' ');
    } else {
      this.#history.up.push(' ');
      this.#history.down.push('O');
    }
    OutputView.printMap(this.#history);
    this.#distance += 1;
    if (this.#pattern.length === this.#distance) {
      return console.log('게임 종료');
    }
    this.askNextStep(retryGame);
  }
}

module.exports = Bridge;
