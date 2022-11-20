const OutputView = require('../views/OutputView');
const InputView = require('../views/InputView');
const BridgeMaker = require('../BridgeMaker');
const InputChecker = require('./InputChecker');
const BridgeGame = require('../models/BridgeGame');
const PrintableBridgeMaker = require('../models/PrintableBridgeMaker');
const { GAME_STATUS, BRIDGE_GAME } = require('../constants/values');
const Console = require('../utils/Console');
const Bridge = require('../models/Bridge');

class GameController {
  #instance = {
    bridge: null,
    bridgeGame: null,
    printableBridgeMaker: null,
  };

  constructor() {
    OutputView.printStartMessage();
  }

  playBridgeGame() {
    InputView.readBridgeSize(this.#initialize.bind(this));
  }

  #initialize(bridgeSize) {
    this.#instance.bridge = new Bridge({
      bridgeSize,
      makeBridge: BridgeMaker.makeBridge,
      initialize: this.#initialize.bind(this),
    });
    this.#instance.bridgeGame = new BridgeGame(this.#instance.bridge.get());
    this.#instance.printableBridgeMaker = new PrintableBridgeMaker();

    this.#start();
  }

  #start() {
    InputView.readMoving(this.#move.bind(this));
  }

  #move(direction) {
    if (InputChecker.checkDirection(direction, this.#move.bind(this)) === GAME_STATUS.ERROR) {
      return;
    }
    this.#instance.printableBridgeMaker.generate(this.#instance.bridgeGame.move(direction));
    OutputView.printMap(this.#instance.printableBridgeMaker.getPrintableBridge());
    if (this.#instance.bridgeGame.checkGameStatus() === GAME_STATUS.PLAYING) {
      this.#start();
    } else {
      this.#quit();
    }
  }

  #quit() {
    if (this.#instance.bridgeGame.checkGameStatus() === GAME_STATUS.FAIL_QUIT) {
      InputView.readGameCommand(this.#restartOrQuit.bind(this));
    } else {
      this.#printGameResult();
    }
  }

  #restartOrQuit(select) {
    if (InputChecker.checkSelect(select, this.#restartOrQuit.bind(this)) === GAME_STATUS.ERROR) {
      return;
    }

    if (select === BRIDGE_GAME.RESTART) {
      this.#instance.bridgeGame.retry(this.#start.bind(this));
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
