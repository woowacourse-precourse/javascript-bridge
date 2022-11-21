const Bridge = require('../models/Bridge');
const BridgeGame = require('../models/BridgeGame');
const Formatter = require('../models/Formatter');
const OutputView = require('../views/OutputView');
const InputView = require('../views/InputView');
const BridgeMaker = require('../BridgeMaker');
const InputChecker = require('./InputChecker');
const Console = require('../utils/Console');
const { GAME_STATE, BRIDGE_GAME } = require('../constants/values');

class GameController {
  #instance = {
    bridge: null,
    bridgeGame: null,
    formatter: null,
  };

  constructor() {
    OutputView.printStartMessage();
  }

  playBridgeGame() {
    InputView.readBridgeSize(this.#initializeGame.bind(this));
  }

  #initializeGame(bridgeSize) {
    this.#instance.bridge = new Bridge({
      bridgeSize,
      makeBridge: BridgeMaker.makeBridge,
      initialize: this.#initializeGame.bind(this),
    });
    this.#instance.bridgeGame = new BridgeGame(this.#instance.bridge.get());
    this.#instance.formatter = new Formatter();

    this.#startGame();
  }

  #startGame() {
    if (this.#instance.bridgeGame.checkState() !== GAME_STATE.PLAYING) {
      return;
    }

    InputView.readMoving(this.#move.bind(this));
  }

  #move(direction) {
    if (InputChecker.checkDirection(direction, this.#move.bind(this)) === GAME_STATE.ERROR) {
      return;
    }

    this.#instance.formatter.generate(this.#instance.bridgeGame.move(direction));
    OutputView.printMap(this.#instance.formatter.getFormattedBridge());
    this.#startGame();

    this.#stopGame();
  }

  #stopGame() {
    if (this.#instance.bridgeGame.checkState() === GAME_STATE.FAIL_STOP) {
      InputView.readGameCommand(this.#restartOrQuit.bind(this));
      return;
    }

    this.#quitGame();
  }

  #restartOrQuit(select) {
    if (InputChecker.checkSelect(select, this.#restartOrQuit.bind(this)) === GAME_STATE.ERROR) {
      return;
    }

    if (select === BRIDGE_GAME.RESTART) {
      this.#instance.bridgeGame.retry(this.#startGame.bind(this));
      return;
    }

    this.#quitGame();
  }

  #quitGame() {
    OutputView.printResult(
      this.#instance.formatter.getFormattedBridge(),
      this.#instance.bridgeGame.getResult()
    );

    Console.close();
  }
}

module.exports = GameController;
