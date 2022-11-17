const OutputView = require('../views/OutputView');
const InputView = require('../views/InputView');
const BridgeChecker = require('./BridgeChecker');
const Convertor = require('../utils/Convertor');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const PlayerInputChecker = require('./PlayerInputChecker');

class GameController {
  #bridge;

  playGame() {
    OutputView.printStartMessage();
    InputView.readBridgeSize(this.#initializeGame.bind(this));
  }

  #initializeGame(rowDataOfBridgeSize) {
    BridgeChecker.checkRowDataOfBridgeSize(rowDataOfBridgeSize);
    const bridgeSize = Convertor.convertStringToDecimalNumber(rowDataOfBridgeSize);
    BridgeChecker.checkBridgeSize(bridgeSize);
    this.#bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator);
    this.#beginGame();
  }

  #beginGame() {
    InputView.readMoving(this.#movePlayer.bind(this));
  }

  #movePlayer(direction) {
    PlayerInputChecker.checkDirection(direction);
  }
}

module.exports = GameController;
