const Output = require("./OutputView");
const Input = require("./InputView");
const BridgeMaker = require("./BridgeMaker");
const RandomNumber = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");

class App {
  #bridgeGame;

  constructor() {
    this.#bridgeGame;
  }

  play() {
    Output.startText();
    Input.readBridgeSize(this.afterBridgeLength);
  }

  afterBridgeLength = (length) => {
    const createRoot = BridgeMaker.makeBridge(length, RandomNumber.generate);
    this.#bridgeGame = new BridgeGame(createRoot);
    Input.readMoving(this.nextMoving);
  }

  nextMoving = (way) => {
    this.#bridgeGame.move(way);
    Output.printMap(this.#bridgeGame);
  }
}

module.exports = App;
