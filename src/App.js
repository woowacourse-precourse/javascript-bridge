const { printIntro } = require("./OutputView");
const { readBridgeSize, readMoving } = require("./InputView");
const { generate } = require("./BridgeRandomNumberGenerator");
const { makeBridge } = require("./BridgeMaker");

class App {
  #bridge;

  constructor() {
    this.#bridge;
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
    console.log(moving);
  }
}

const app = new App();
app.play();

module.exports = App;
