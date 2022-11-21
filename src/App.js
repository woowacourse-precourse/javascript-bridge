const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const GAME = require('./consts/Game');

class App {
  play() {
    OutputView.printStart();
    const bridgeGame = this.makeBridgeGame();
    const [turnSuccess, gameCount] = this.executeGame(bridgeGame);
    OutputView.printResult(bridgeGame, turnSuccess, gameCount);
  }

  makeBridgeGame() {
    const bridgeSize = InputView.readBridgeSize();
    const bridge = BridgeMaker.makeBridge(
      bridgeSize,
      BridgeRandomNumberGenerator.generate
    );

    return new BridgeGame(bridge);
  }

  executeGame(bridgeGame) {
    let isContinue = true;
    let gameCount = 0;
    let turnSuccess;
    while (isContinue) {
      gameCount += 1;
      turnSuccess = this.executeTurn(bridgeGame);
      isContinue = bridgeGame.retry(InputView.readGameCommand());
    }

    return [turnSuccess, gameCount];
  }

  executeTurn(bridgeGame) {
    let turnSuccess = true;
    let turnValidation = bridgeGame.getTurn() < bridgeGame.getBridge().length;

    while (turnValidation && turnSuccess) {
      turnSuccess = this.executeMoving(bridgeGame);
      OutputView.printMap(bridgeGame, turnSuccess);
      turnValidation = bridgeGame.getTurn() < bridgeGame.getBridge().length;
    }

    return turnSuccess;
  }

  executeMoving(bridgeGame) {
    const moving = InputView.readMoving();
    const turnSuccess = bridgeGame.move(moving);

    return turnSuccess;
  }
}

module.exports = App;
