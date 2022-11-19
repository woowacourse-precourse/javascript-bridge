const BridgeGame = require('./Game/BridgeGame');
const InputView = require('./View/InputView');
const OutputView = require('./View/OutputView');

class App {
  play() {
    this.startGame();
  }

  startGame() {
    this.game = new BridgeGame();
    InputView.game = this.game;
    OutputView.printStart();
    InputView.playGame();
  }
}

new App().play();

module.exports = App;
