const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');
const BridgeGame = require('./domain/BridgeGame');
const Validator = require('./Validator');
const { MESSAGE, ERROR, MOVE_RESULT, COMMAND } = require('./constant/Constant');

class App {
  #bridgeGame;
  #gameResult;

  play() {
    OutputView.printMessage(MESSAGE.GAME_START);
    this.#bridgeSizeInputPhase();
  }
}

module.exports = App;
