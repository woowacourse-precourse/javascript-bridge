const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { command } = require('./utils/message');
const OutputView = require('./OutputView');
const InputView = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');

const { Console } = require('@woowacourse/mission-utils');

class App {
  #bridgeGame;
  #bridgeSize;
  #bridge;
  #curBridge;
  #tryNum;

  constructor() {
    this.#tryNum = 1;
  }

  play() {
    OutputView.printCommand(command.START);
    this.getBridgeSize();
  }

  async getBridgeSize() {
    this.#bridgeSize = await InputView.readBridgeSize();
    this.setBridge();
  }

  setBridge() {
    this.#bridge = BridgeMaker.makeBridge(
      this.#bridgeSize,
      BridgeRandomNumberGenerator.generate
    );
    this.#bridgeGame = new BridgeGame(this.#bridge);
    this.doGame();
  }

  async doGame() {
    let brigeIndex = 0;
    while (brigeIndex < this.#bridgeSize) {
      const moveInput = await InputView.readMoving();
      this.#curBridge = this.#bridgeGame.makeCurBridge(moveInput, brigeIndex);
      OutputView.printMap(this.#curBridge);
      if (!this.#bridgeGame.move(moveInput, brigeIndex)) {
        this.doRetry();
        return;
      }
      brigeIndex += 1;
    }
    OutputView.printResult('성공', this.#curBridge, this.#tryNum);
    this.end();
  }

  async doRetry() {
    const retryInput = await InputView.readGameCommand();
    if (retryInput === 'R') {
      this.#tryNum += 1;
      this.#bridgeGame.retry();
      this.doGame();
    }
    if (retryInput === 'Q') {
      OutputView.printResult('실패', this.#curBridge, this.#tryNum);
      this.end();
    }
  }

  end() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
