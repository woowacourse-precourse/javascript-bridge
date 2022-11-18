const OutputView = require('../views/OutputView');
const InputView = require('../views/InputView');
const BridgeChecker = require('./BridgeChecker');
const Convertor = require('../utils/Convertor');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const PlayerInputChecker = require('./PlayerInputChecker');
const BridgeGame = require('../models/BridgeGame');
const PrintableBridgeMaker = require('../PrintableBridgeMaker');
const { GAME_STATUS } = require('../constants/values');

class GameController {
  #bridgeGame;

  initializeGame() {
    OutputView.printStartMessage();
    InputView.readBridgeSize(this.#makeBridge.bind(this));
  }

  #makeBridge(rowDataOfBridgeSize) {
    BridgeChecker.checkRowDataOfBridgeSize(rowDataOfBridgeSize);
    const bridgeSize = Convertor.convertStringToDecimalNumber(rowDataOfBridgeSize);
    BridgeChecker.checkBridgeSize(bridgeSize);
    this.#bridgeGame = new BridgeGame(
      BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate)
    );
    this.playGame();
  }

  playGame() {
    InputView.readMoving(this.#movePlayer.bind(this));
  }

  #movePlayer(direction) {
    PlayerInputChecker.checkDirection(direction);
    OutputView.printMap(PrintableBridgeMaker.generate(this.#bridgeGame.move(direction)));
    if (this.#bridgeGame.checkGameStatus() === GAME_STATUS.PLAYING) {
      this.playGame();

      return;
    }

    this.#quitGame();
  }

  #quitGame() {
    if (this.#bridgeGame.checkGameStatus() === GAME_STATUS.FAIL_END) {
      InputView.readGameCommand(this.#restartOrQuitGame.bind(this));
    }
  }

  #restartOrQuitGame(select) {
    PlayerInputChecker.checkSelect(select);
  }
}

module.exports = GameController;
