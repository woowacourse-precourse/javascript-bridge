const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');

class Process {
  #game;

  start() {
    this.#game = new BridgeGame();
    InputView.readBridgeSize(this);
  }

  makeBridge(input) {
    const bridge = BridgeMaker.makeBridge(
      Number(input),
      BridgeRandomNumberGenerator.generate
    );
    this.#game.setBridge(bridge);
    InputView.readMoving(this);
  }

  move(input) {}
}

module.exports = Process;
