const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const command = require('./utils/message');
const OutputView = require('./OutputView');
const InputView = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');

class App {
  #bridgeSize;
  #bridge;
  #curBridge;
  #tryNum;

  constructor() {
    this.#tryNum = 1;
  }

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
      this.#curBridge = bridgeGame.makeCurBridge(moveInput, brigeIndex);
      OutputView.printMap(this.#curBridge);

      if (!bridgeGame.move(moveInput, brigeIndex)) {
        const retryInput = await InputView.readGameCommand();
        if (retryInput === 'R') {
          this.#tryNum += 1;
          this.#curBridge = bridgeGame.retry();
          this.#doGame();
        }
      }
    }
  }
}

const app = new App();
app.play();

module.exports = App;
