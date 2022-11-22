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
      const bridgeGame = this.makeBridgeGame();
      const [turnSuccess, gameCount] = this.executeGame(bridgeGame);
      OutputView.printResult(bridgeGame, turnSuccess, gameCount);
    } catch (e) {
      Exception.printError(e.message);
    }
  }

  makeBridgeGame() {
    try {
      const bridge = this.getBridge();
      return new BridgeGame(bridge);
    } catch (e) {
      Exception.printError(e.message);
      return this.makeBridgeGame();
    }
  }

  getBridge() {
    const bridgeSize = InputView.readBridgeSize();
    const bridge = BridgeMaker.makeBridge(
      bridgeSize,
      BridgeRandomNumberGenerator.generate
    );

    return bridge;
  }

  executeGame(bridgeGame) {
    let isContinue = true;
    let gameCount = 0;
    let turnSuccess;
    while (isContinue) {
      gameCount += 1;
      turnSuccess = this.executeTurn(bridgeGame);
      isContinue = this.getRetry(turnSuccess, bridgeGame);
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

  getRetry(turnSuccess, bridgeGame) {
    if (turnSuccess) {
      return false;
    }

    try {
      const command = InputView.readGameCommand();
      const isContinue = bridgeGame.retry(command);
      return isContinue;
    } catch (e) {
      Exception.printError(e.message);
      return this.getRetry(turnSuccess, bridgeGame);
    }
  }

  executeMoving(bridgeGame) {
    try {
      const moving = InputView.readMoving();
      const turnSuccess = bridgeGame.move(moving);
      return turnSuccess;
    } catch (e) {
      Exception.printError(e.message);
      return this.executeMoving(bridgeGame);
    }
  }
}

module.exports = App;
