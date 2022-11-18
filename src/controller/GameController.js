const OutputView = require('../views/OutputView');
const InputView = require('../views/InputView');
const BridgeChecker = require('./BridgeChecker');
const Convertor = require('../utils/Convertor');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const PlayerInputChecker = require('./PlayerInputChecker');
const BridgeGame = require('../models/BridgeGame');
const PrintableBridgeMaker = require('../PrintableBridgeMaker');

class GameController {
  #bridgeGame;

  playGame() {
    OutputView.printStartMessage();
    InputView.readBridgeSize(this.#initializeGame.bind(this));
  }

  #initializeGame(rowDataOfBridgeSize) {
    BridgeChecker.checkRowDataOfBridgeSize(rowDataOfBridgeSize);
    const bridgeSize = Convertor.convertStringToDecimalNumber(rowDataOfBridgeSize);
    BridgeChecker.checkBridgeSize(bridgeSize);
    this.#bridgeGame = new BridgeGame(
      BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate)
    );
    this.#beginGame();
  }

  #beginGame() {
    InputView.readMoving(this.#movePlayer.bind(this));
  }

  #movePlayer(direction) {
    PlayerInputChecker.checkDirection(direction);
    OutputView.printMap(PrintableBridgeMaker.generate(this.#bridgeGame.move(direction)));
  }
}

module.exports = GameController;
