const OutputView = require('../view/OutputView');
const InputView = require('../view/InputView');
const BridgeGame = require('../domain/BridgeGame');

class Controller {
  #bridgeGame;

  execute() {
    this.#bridgeGame = new BridgeGame();
    OutputView.printGameStart();
    InputView.readBridgeSize(this.createBridgeSize.bind(this));
  }

  createBridgeSize(answer) {
    this.#bridgeGame.execute(answer);
  }
}

module.exports = Controller;