const OutputView = require('../views/OutputView');
const InputView = require('../views/InputView');
const BridgeChecker = require('./BridgeChecker');
const Convertor = require('../utils/Convertor');
const BridgeMaker = require('../BridgeMaker');
const PlayerInputChecker = require('./PlayerInputChecker');
const BridgeGame = require('../models/BridgeGame');
const PrintableBridgeMaker = require('../models/PrintableBridgeMaker');
const { GAME_STATUS, BRIDGE_GAME } = require('../constants/values');
const Console = require('../utils/Console');

class GameController {
  #bridgeGame;

  #printableBridgeMaker;

  initializeGame() {
    OutputView.printStartMessage();
    InputView.readBridgeSize(this.#makeBridge.bind(this));
  }

  #makeBridge(rowDataOfBridgeSize) {
    try {
      BridgeChecker.checkRowDataOfBridgeSize(rowDataOfBridgeSize);
    } catch (e) {
      Console.print(e);
    }
    const bridgeSize = Convertor.convertStringToDecimalNumber(rowDataOfBridgeSize);
    try {
      BridgeChecker.checkBridgeSize(bridgeSize);
    } catch (e) {
      Console.print(e);
    }
    this.#bridgeGame = new BridgeGame(
      BridgeMaker.makeBridge(bridgeSize, Convertor.convertRandomNumberToString)
    );
    this.#printableBridgeMaker = new PrintableBridgeMaker();

    this.#playGame();
  }

  #playGame() {
    InputView.readMoving(this.#movePlayer.bind(this));
  }

  #movePlayer(direction) {
    PlayerInputChecker.checkDirection(direction);
    const moveResult = this.#bridgeGame.move(direction);
    this.#printableBridgeMaker.generate(moveResult);
    OutputView.printMap(this.#printableBridgeMaker.getPrintableBridge());
    if (this.#bridgeGame.checkGameStatus() === GAME_STATUS.PLAYING) {
      this.#playGame();
      return;
    }

    this.#quitGame();
  }

  #quitGame() {
    if (this.#bridgeGame.checkGameStatus() === GAME_STATUS.FAIL_END) {
      InputView.readGameCommand(this.#restartOrQuitGame.bind(this));
      return;
    }

    this.#printGameResult();
  }

  #restartOrQuitGame(select) {
    PlayerInputChecker.checkSelect(select);
    if (select === BRIDGE_GAME.QUIT) {
      this.#printGameResult();
      return;
    }

    this.#bridgeGame.retry();
    this.#playGame();
  }

  #printGameResult() {
    OutputView.printResult(
      this.#printableBridgeMaker.getPrintableBridge(),
      this.#bridgeGame.getResult()
    );

    Console.close();
  }
}

module.exports = GameController;
