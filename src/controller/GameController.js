const OutputView = require('../views/OutputView');
const InputView = require('../views/InputView');
const BridgeSizeMaker = require('./BridgeSizeMaker');
const Convertor = require('../utils/Convertor');
const BridgeMaker = require('../BridgeMaker');
const InputChecker = require('./InputChecker');
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
    Console.print('');
    const bridgeSize = BridgeSizeMaker.make(rowDataOfBridgeSize, this.#makeBridge.bind(this));
    this.#bridgeGame = new BridgeGame(
      BridgeMaker.makeBridge(bridgeSize, Convertor.convertRandomNumberToString)
    );
    this.#printableBridgeMaker = new PrintableBridgeMaker();

    this.playGame();
  }

  playGame() {
    InputView.readMoving(this.#move.bind(this));
  }

  #move(direction) {
    if (InputChecker.checkDirection(direction, this.#move.bind(this)) === GAME_STATUS.ERROR) {
      return;
    }
    this.#printableBridgeMaker.generate(this.#bridgeGame.move(direction));
    OutputView.printMap(this.#printableBridgeMaker.getPrintableBridge());
    if (this.#bridgeGame.checkGameStatus() === GAME_STATUS.PLAYING) {
      this.playGame();
    } else {
      this.#quitGame();
    }
  }

  #quitGame() {
    if (this.#bridgeGame.checkGameStatus() === GAME_STATUS.FAIL_END) {
      InputView.readGameCommand(this.#restartOrQuit.bind(this));
      return;
    }

    this.#printGameResult();
  }

  #restartOrQuit(select) {
    if (InputChecker.checkSelect(select, this.#restartOrQuit.bind(this)) === GAME_STATUS.ERROR) {
      return;
    }

    if (select === BRIDGE_GAME.RESTART) {
      this.#bridgeGame.retry(this.playGame.bind(this));
    } else {
      this.#printGameResult();
    }
  }

  #printGameResult() {
    OutputView.printResult(
      this.#printableBridgeMaker.getPrintableBridge(),
      this.#bridgeGame.getResult()
    );

    this.#normalTerminationProgram();
  }

  #normalTerminationProgram() {
    Console.close();
  }
}

module.exports = GameController;
