const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Bridge = require('./model/Bridge');
const GamePiece = require('./model/GamePiece');

class GameController {
  #bridge;
  #gamePiece;

  load() {
    InputView.readBridgeSize(this.setBridge.bind(this));
  }

  setBridge(size) {
    try {
      this.#bridge = new Bridge(size);
    } catch (error) {
      OutputView.printError(error.message);
      InputView.readBridgeSize(this.setBridge.bind(this));
    }

    InputView.readMoving(this.setGamePiece.bind(this));
  }

  setGamePiece(moving) {
    try {
      this.#gamePiece = new GamePiece(moving);
    } catch (error) {
      OutputView.printError(error.message);
      InputView.readMoving(this.setGamePiece.bind(this));
    }
  }
}

module.exports = GameController;
