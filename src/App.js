const { printIntro, printMap, printResult } = require("./OutputView");
const { readBridgeSize, readMoving } = require("./InputView");
const { generate } = require("./BridgeRandomNumberGenerator");
const { makeBridge } = require("./BridgeMaker");

const BridgeGame = require("./BridgeGame");

class App {
  #bridge;
  #location;

  constructor() {
    this.#bridge;
    this.#location = 0;

    this.bridgeGame = new BridgeGame();
  }

  play() {
    printIntro();

    readBridgeSize(this.make.bind(this));
  }

  make(size) {
    this.#bridge = makeBridge(size, generate);

    readMoving(this.move.bind(this));
  }

  move(moving) {
    const isSafe = this.bridgeGame.move(moving, this.#bridge, this.#location);
    const current = { isSafe, bridge: this.#bridge, location: this.#location };

    printMap(current);
    if (!isSafe) return this.result(false, current);
    this.#location += 1;
    if (this.#location === this.#bridge.length)
      return this.result(true, current);

    readMoving(this.move.bind(this));
  }

  result(isSuccess, current) {
    printResult(isSuccess, current, printMap);
  }
}

const app = new App();
app.play();

module.exports = App;
