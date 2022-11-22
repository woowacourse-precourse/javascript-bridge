const { Console } = require("@woowacourse/mission-utils");
const {
  printIntro,
  printMap,
  printResult,
  printError,
} = require("./OutputView");
const { readBridgeSize, readMoving, readGameCommand } = require("./InputView");
const { generate } = require("./BridgeRandomNumberGenerator");
const { makeBridge } = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");

class App {
  #location;
  #tryCount;

  constructor() {
    this.#location = 0;
    this.#tryCount = 1;

    this.bridgeGame;
  }

  play() {
    printIntro();

    try {
      readBridgeSize(this.make.bind(this));
    } catch (message) {
      printError(message);

      readBridgeSize(this.make.bind(this));
    }
  }

  make(size) {
    const bridge = makeBridge(size, generate);
    this.bridgeGame = new BridgeGame(bridge);

    this.moving();
  }

  moving() {
    try {
      readMoving(this.move.bind(this));
    } catch (message) {
      printError(message);

      readMoving(this.move.bind(this));
    }
  }

  move(moving) {
    const bridge = this.bridgeGame.get();
    const isSafe = this.bridgeGame.move(moving, this.#location);
    const current = { isSafe, bridge, location: this.#location };

    printMap(current);
    this.#location += 1;
    if (!isSafe) return this.select(current);
    if (this.#location === bridge.length) return this.result(true, current);

    this.moving();
  }

  select(current) {
    try {
      // prettier-ignore
      readGameCommand(this.bridgeGame.retry.bind(this), this.result.bind(this), current);
    } catch (message) {
      printError(message);

      // prettier-ignore
      readGameCommand(this.bridgeGame.retry.bind(this), this.result.bind(this), current);
    }
  }

  retry() {
    this.#tryCount += 1;
    this.#location = 0;

    this.moving();
  }

  result(isSuccess, current) {
    printResult({ isSuccess, current, tryCount: this.#tryCount }, printMap);

    this.exit();
  }

  exit() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
