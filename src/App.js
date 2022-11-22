const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Exception = require('./Exception');

class App {
  play() {
    try {
      OutputView.printStart();
      const bridgeGame = Exception.handleError(this.makeBridgeGame);
      const [turnSuccess, gameCount] = this.executeGame(bridgeGame);
      OutputView.printResult(bridgeGame, turnSuccess, gameCount);
    } catch (e) {
      Exception.printError(e.message);
    }
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
      isContinue = Exception.handleError(() =>
        this.getRetry(turnSuccess, bridgeGame)
      );
    }

    return [turnSuccess, gameCount];
  }

  executeTurn(bridgeGame) {
    let turnSuccess = true;
    let turnValidation = bridgeGame.getTurn() < bridgeGame.getBridge().length;

    while (turnValidation && turnSuccess) {
      turnSuccess = Exception.handleError(() => this.executeMoving(bridgeGame));
      OutputView.printMap(bridgeGame, turnSuccess);
      turnValidation = bridgeGame.getTurn() < bridgeGame.getBridge().length;
    }

    return turnSuccess;
  }

  getRetry(turnSuccess, bridgeGame) {
    if (turnSuccess) {
      return false;
    }
    const command = InputView.readGameCommand();
    const isContinue = bridgeGame.retry(command);
    return isContinue;
  }

  executeMoving(bridgeGame) {
    const moving = InputView.readMoving();
    const turnSuccess = bridgeGame.move(moving);
    return turnSuccess;
  }
}

module.exports = App;
