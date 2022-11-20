const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const MapGenerator = require('./MapGenerator');

class Process {
  #game;
  #result = [];

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

  move(input) {
    this.makeResult(input);
    const mapGenerator = new MapGenerator();
    const map = mapGenerator.generate(this.#result);
    OutputView.printMap(map);

    if (this.#game.isAccord(input)) {
      this.#game.move();
      if (this.#game.isEnd()) OutputView.printResult();
      else InputView.readMoving(this);
    } else InputView.readGameCommand(this);
  }

  makeResult(input) {
    this.#result.push([input, this.#game.isAccord(input)]);
  }
}

module.exports = Process;
