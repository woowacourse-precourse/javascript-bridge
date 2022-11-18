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
}

module.exports = Bridge;
