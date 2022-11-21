const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const Bridge = require('./model/Bridge');
const BridgeGame = require('./controller/BridgeGame');

class App {
  bridgeGame;
  constructor() {
    this.bridgeGame = new BridgeGame();
  }
  play() {
    this.bridgeGame.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
