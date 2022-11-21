const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const command = require('./utils/message');
const OutputView = require('./OutputView');
const InputView = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');

class App {
  #bridgeSize;
  #bridge;

  play() {
    OutputView.printCommand(command.START);
    this.#setBridge();
  }

  async #setBridge() {
    this.#bridgeSize = await InputView.readBridgeSize();
    this.#bridge = BridgeMaker.makeBridge(
      this.#bridgeSize,
      BridgeRandomNumberGenerator.generate
    );
    this.#doGame();
  }

  async #doGame() {
    const bridgeGame = new BridgeGame(this.#bridge);
    for (let brigeIndex = 0; brigeIndex < this.#bridgeSize; brigeIndex++) {
      const moveInput = await InputView.readMoving();
      bridgeGame.move(moveInput, brigeIndex);
    }
  }
}

const app = new App();
app.play();

module.exports = App;
