const { Console } = require('@woowacourse/mission-utils');
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
    this.printMap();

    if (this.#game.isAccord(input)) {
      this.#game.move();
      if (this.#game.isEnd()) OutputView.printResult();
      else InputView.readMoving(this);
    } else InputView.readGameCommand(this);
  }

  makeResult(input) {
    this.#result.push([input, this.#game.isAccord(input)]);
  }

  printMap() {
    const mapGenerator = new MapGenerator();
    const map = mapGenerator.generate(this.#result);
    OutputView.printMap(map);
  }

  retryOrQuit(input) {
    if (input === 'R') {
      this.#game.retry();
      this.#result = [];
      InputView.readMoving(this);
    }
    if (input === 'Q') {
      this.end();
    }
  }

  end() {
    this.printMap();
    OutputView.printResult();
    Console.close();
  }
}

module.exports = Process;
