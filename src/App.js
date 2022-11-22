const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('./BridgeGame');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  play() {
    const bridgegame = new BridgeGame();
    this.startGame(bridgegame);
  }

  startGame(game) {
    OutputView.printStartMessage();
    InputView.readBridgeSize(game);
  }
}

const app = new App();
app.play();

module.exports = App;
