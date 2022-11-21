const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const GAME = require('./consts/Game');

class App {
  play() {
    OutputView.printStart();
    const bridgeSize = InputView.readBridgeSize();
    const bridge = BridgeMaker.makeBridge(
      bridgeSize,
      BridgeRandomNumberGenerator.generate
    );

    const bridgeGame = new BridgeGame(bridge);

    let isContinue = true;

    while (isContinue) {
      this.excuteGame(bridgeGame);
      isContinue = false;

      if (!turnSuccess) {
        isContinue = this.getIsContinue(InputView.readGameCommand());
      }
    }
  }

  excuteGame(bridgeGame) {
    let turnSuccess = true;
    while (turnSuccess) {
      turnSuccess = this.executeTurn(bridgeGame);

      OutputView.printMap(
        bridgeGame.getBridge(),
        bridgeGame.getTurn(),
        turnSuccess
      );
    }
  }

  executeTurn(bridgeGame) {
    const moving = InputView.readMoving();
    const turnSuccess = bridgeGame.move(moving);

    return turnSuccess;
  }

  getIsContinue(command) {
    if (command === GAME.RESTART) {
      return true;
    }
    return false;
  }
}

module.exports = App;
