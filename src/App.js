const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { InputView, OutputView } = require('./Console');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');

class App {
  play() {
    const bridgeSize = InputView.readBridgeSize();
    const bridge = BridgeMaker.makeBridge(
      bridgeSize,
      BridgeRandomNumberGenerator.generate,
    );
    const bridgeGame = new BridgeGame(bridge);
    while (!this.#start(bridgeGame));
  }

  #start(bridgeGame) {
    const nextMoveChar = InputView.readMoving();
    bridgeGame.move(nextMoveChar);
    OutputView.printMap(bridgeGame.bridgeAnswers);
    if (bridgeGame.isFinish) {
      const gameCommand = InputView.readGameCommand();
      OutputView.printResult();
      return bridgeGame.retry(gameCommand);
    }
  }
}

module.exports = App;
