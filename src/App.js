const BridgeGame = require('./Game/BridgeGame');
const InputView = require('./View/InputView');
const OutputView = require('./View/OutputView');

class App {
  play() {
    this.setGame();
  }

  setGame() {
    this.game = new BridgeGame();
    OutputView.showStart();
    InputView.setGame(this.game);
  }
}

module.exports = App;
