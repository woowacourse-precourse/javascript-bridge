const InputView = require('../src/InputView');
const OutputView = require('../src/OutputView');
const BridgeGame = require('./BridgeGame');

class App {

  play() {
    OutputView.printGameStart();
    this.startGame();
  }

  startGame() {
    const bridgeGame = new BridgeGame();
    InputView.readBridgeSize(bridgeGame.initAnsBridge);
    for (let i = 0; i < bridgeGame.getBridgeLen(); i++) {
      InputView.readMoving(bridgeGame.move);
      if (bridgeGame.isFail()) break;
    }
    InputView.readGameCommand((choice) => {
      if (choice == 'R') { retryGame(); return; } 
      this.quitGame();
    });
  }

  quitGame() {
    const bridgeGame = new BridgeGame();
    OutputView.printResult(bridgeGame.getBridge(), bridgeGame.isFail(), bridgeGame.getGameCnt())
  }

  retryGame() {
    const bridgeGame = new BridgeGame();
    bridgeGame.retry();
    this.startGame();
  }
}

module.exports = App;
