const { printIntro, printMap } = require("./OutputView");
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

    printMap(isSafe, this.#bridge, this.#location);
    if (!isSafe) return this.fail();

    this.#location += 1;
    if (this.#location === this.#bridge.length) return this.success();

    readMoving(this.move.bind(this));
  }

  fail() {
    console.log("실패");
  }

  success() {
    console.log("성공");
  }
}

const app = new App();
app.play();

module.exports = App;
