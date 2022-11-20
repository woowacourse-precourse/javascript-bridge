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
    const isSuccess = this.bridgeGame.move(
      moving,
      this.#bridge,
      this.#location
    );

    console.log(this.#bridge, isSuccess);

    this.#location += 1;
  }
}

const app = new App();
app.play();

module.exports = App;
