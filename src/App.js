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
  constructor() {
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
    const bridge = this.bridgeGame.getBridge();
    const location = this.bridgeGame.getLocation();
    const isSafe = this.bridgeGame.move(moving);
    const current = { bridge, location, isSafe };

    printMap(current);
    if (!isSafe) return this.command(current);
    if (location === bridge.length - 1) return this.result(true, current);

    this.moving();
  }

  command(current) {
    try {
      // prettier-ignore
      readGameCommand({retry: this.bridgeGame.retry.bind(this.bridgeGame), moving: this.moving.bind(this), result: this.result.bind(this)}, current);
    } catch (message) {
      printError(message);

      // prettier-ignore
      readGameCommand({retry: this.bridgeGame.retry.bind(this.bridgeGame), moving: this.moving.bind(this), result: this.result.bind(this)}, current);
    }
  }

  result(isSuccess, current) {
    const tryCount = this.bridgeGame.getTryCount();

    printResult({ current, isSuccess, tryCount }, printMap);

    this.exit();
  }

  exit() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
