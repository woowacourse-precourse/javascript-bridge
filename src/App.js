const { Console } = require("@woowacourse/mission-utils");
const { printIntro, printMap, printResult } = require("./OutputView");
const { readBridgeSize, readMoving, readGameCommand } = require("./InputView");
const { generate } = require("./BridgeRandomNumberGenerator");
const { makeBridge } = require("./BridgeMaker");

const BridgeGame = require("./BridgeGame");

class App {
  #bridge;
  #location;
  #tryCount;

  constructor() {
    this.#bridge;
    this.#location = 0;
    this.#tryCount = 1;

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
    if (!isSafe) return this.select(current);
    this.#location += 1;
    if (this.#location === this.#bridge.length)
      return this.result(true, current);

    readMoving(this.move.bind(this));
  }

  select(current) {
    readGameCommand(
      this.bridgeGame.retry.bind(this),
      this.result.bind(this),
      current
    );
  }

  retry() {
    this.#tryCount += 1;
    this.#location = 0;

    readMoving(this.move.bind(this));
  }

  result(isSuccess, current) {
    printResult(isSuccess, current, printMap);

    this.exit();
  }

  exit() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
