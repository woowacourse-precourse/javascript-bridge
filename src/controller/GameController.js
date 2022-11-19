const OutputView = require('../views/OutputView');
const InputView = require('../views/InputView');
const BridgeSize = require('../models/BridgeSize');
const DataHandler = require('../utils/DataHandler');
const BridgeMaker = require('../BridgeMaker');
const InputChecker = require('./InputChecker');
const BridgeGame = require('../models/BridgeGame');
const PrintableBridgeMaker = require('../models/PrintableBridgeMaker');
const { GAME_STATUS, BRIDGE_GAME } = require('../constants/values');
const Console = require('../utils/Console');

class GameController {
  #instance = {
    bridgeSize: 0,
    bridgeGame: 0,
    printableBridgeMaker: 0,
  };

  initializeGame() {
    OutputView.printStartMessage();
    InputView.readBridgeSize(this.#makeBridge.bind(this));
  }

  #makeBridge(bridgeSize) {
    this.#instance.bridgeSize = new BridgeSize(bridgeSize, this.#makeBridge.bind(this));
    Console.print('');
    this.#instance.bridgeGame = new BridgeGame(
      BridgeMaker.makeBridge(this.#instance.bridgeSize.get(), DataHandler.makeZeroOrOne)
    );
    this.#instance.printableBridgeMaker = new PrintableBridgeMaker();

    this.playGame();
  }

  playGame() {
    InputView.readMoving(this.#move.bind(this));
  }

  #move(direction) {
    if (InputChecker.checkDirection(direction, this.#move.bind(this)) === GAME_STATUS.ERROR) {
      return;
    }
    this.#instance.printableBridgeMaker.generate(this.#instance.bridgeGame.move(direction));
    OutputView.printMap(this.#instance.printableBridgeMaker.getPrintableBridge());
    if (this.#instance.bridgeGame.checkGameStatus() === GAME_STATUS.PLAYING) {
      this.playGame();
    } else {
      this.#quitGame();
    }
  }

  #quitGame() {
    if (this.#instance.bridgeGame.checkGameStatus() === GAME_STATUS.FAIL_END) {
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
      this.#instance.bridgeGame.retry(this.playGame.bind(this));
    } else {
      this.#printGameResult();
    }
  }

  #printGameResult() {
    OutputView.printResult(
      this.#instance.printableBridgeMaker.getPrintableBridge(),
      this.#instance.bridgeGame.getResult()
    );

    Console.close();
  }
}

module.exports = GameController;
