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
    let count = 0;
    let turnSuccess;
    while (isContinue) {
      count += 1;

      turnSuccess = this.excuteGame(bridgeGame);
      isContinue = false;

      if (!turnSuccess) {
        isContinue = this.getIsContinue(InputView.readGameCommand());
      }
    }
    OutputView.printResult(
      bridgeGame.getBridge(),
      bridgeGame.getTurn(),
      turnSuccess,
      count
    );
  }

  excuteGame(bridgeGame) {
    let turnSuccess = true;
    const bridge = bridgeGame.getBridge();
    const turn = bridgeGame.getTurn();

    while (turn < bridge.length && turnSuccess) {
      turnSuccess = this.executeTurn(bridgeGame);

      OutputView.printMap(
        bridgeGame.getBridge(),
        bridgeGame.getTurn(),
        turnSuccess
      );
    }
    return turnSuccess;
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
