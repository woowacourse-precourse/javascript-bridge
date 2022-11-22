const InputView = require('../src/InputView');
const OutputView = require('../src/OutputView');
const BridgeGame = require('./BridgeGame');


class App {
  play() {
    OutputView.printGameStart();
    this.startGame();
  }

  startGame() {
    InputView.readBridgeSize(BridgeGame.initAnsBridge);
    for (let i = 0; i < BridgeGame.getBridgeLen(); i++) {
      InputView.readMoving(BridgeGame.move);
      if (BridgeGame.isFail()) break;
    }
    InputView.readGameCommand((choice) => {
      if (choice == 'R') { retryGame(); return; } 
      this.quitGame();
    });
  }

  quitGame() {
    OutputView.printResult(BridgeGame.getBridge(), BridgeGame.isFail(), BridgeGame.getGameCnt())
  }

  retryGame() {
    BridgeGame.retry();
    this.startGame();
  }
}

module.exports = App;
