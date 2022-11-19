const InputView = require("./InputView");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");
const { Console } = require("@woowacourse/mission-utils");

class App {
  #bridgeGame;
  #playCount;
  constructor() {
    this.#bridgeGame = null;
    this.#playCount = 0;
  }

  async initiate() {
    const bridgeSize = await InputView.readBridgeSize();
    this.#bridgeGame = new BridgeGame(
      BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate)
    );
  }

  async progress() {
    const moving = await InputView.readMoving();
    const moveResult = this.#bridgeGame.move(moving);
    OutputView.printMap(moving, moveResult);
  }

  play() {}

  quit() {
    Console.close();
  }

  increasePlayCount() {
    this.#playCount++;
  }
}

const app = new App();
app.play();

module.exports = App;
