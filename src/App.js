const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { InputView, OutputView } = require('./Console');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');

class App {
  #isNotFinish = true;

  play() {
    InputView.readBridgeSize(this.#playCallback.bind(this));
  }
  #playCallback(bridgeSize) {
    const bridge = BridgeMaker.makeBridge(
      bridgeSize,
      BridgeRandomNumberGenerator.generate,
    );
    const bridgeGame = new BridgeGame(bridge);
    while (this.#isNotFinish) {
      if(bridgeGame.isFinish && bridgeGame.isSuccess) break;
      this.#start(bridgeGame);
    }
    InputView.close();
  }

  #start(bridgeGame) {
    InputView.readMoving(bridgeGame, this.#startCallback.bind(this));
  }
  #startCallback(bridgeGame, nextMoveChar) {
    bridgeGame.move(nextMoveChar);
    OutputView.printMap(bridgeGame);
    if (bridgeGame.isFinish) {
      this.#finish(bridgeGame);
    }
  }

  #finish(bridgeGame) {
    if (bridgeGame.isSuccess) {
      OutputView.printResult(bridgeGame);
      this.#isNotFinish = false;
      return;
    }
    InputView.readGameCommand(bridgeGame, this.#finishCallback.bind(this));
  }
  #finishCallback(bridgeGame, gameCommand) {
    const isRetry = bridgeGame.retry(gameCommand);
    if (!isRetry) {
      OutputView.printResult(bridgeGame);
      this.#isNotFinish = false;
    }
  }
}

module.exports = App;
