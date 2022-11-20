const { COMMAND, ERROR } = require('./utils/constants');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Bridge = require('./model/Bridge');
const BridgeGame = require('./BridgeGame');
const Map = require('./model/Map');
const Result = require('./model/Result');

class GameController {
  #bridge;
  #bridgeGame;
  #map;
  #result;

  constructor() {
    this.#map = new Map();
    this.#result = new Result();
  }

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

    this.#bridgeGame = new BridgeGame(this.#bridge);
    InputView.readMoving(this.validateMoving.bind(this));
  }

  validateMoving(moving) {
    try {
      if (moving !== 'U' && moving !== 'D') {
        throw new Error(ERROR.read_moving_error);
      }
      this.playGame(moving);
    } catch (error) {
      OutputView.printError(error.message);
      InputView.readMoving(this.validateMoving.bind(this));
    }
  }

  playGame(moving) {
    const { moveSuccess, isEndOfBridge } = this.#bridgeGame.move(moving);
    OutputView.printMap(this.#map.updateMap(moving, moveSuccess));

    if (moveSuccess) {
      this.handleMoveSuccess(isEndOfBridge);
    } else {
      this.handleMoveFail();
    }
  }

  handleMoveSuccess(isEndOfBridge) {
    if (isEndOfBridge) {
      OutputView.printResult(this.#map.getMap(), this.#result.updateResult(true));
      InputView.closeView();
    } else {
      InputView.readMoving(this.validateMoving.bind(this));
    }
  }

  handleMoveFail() {
    InputView.readGameCommand(this.validateGameCommand.bind(this));
  }

  validateGameCommand(gameCommand) {
    try {
      if (gameCommand !== COMMAND.restart && gameCommand !== COMMAND.quit) {
        throw new Error(ERROR.read_command_error);
      }
      this.handleGameCommand(gameCommand);
    } catch (error) {
      OutputView.printError(error.message);
      InputView.readGameCommand(this.validateGameCommand.bind(this));
    }
  }

  handleGameCommand(command) {
    if (command === COMMAND.restart) {
      this.#result.updateTryCount();
      this.#bridgeGame.retry();
      this.#map.resetMap();
      InputView.readMoving(this.validateMoving.bind(this));
    } else if (command === COMMAND.quit) {
      OutputView.printResult(this.#map.getMap(), this.#result.updateResult(false));
      InputView.closeView();
    }
  }
}

module.exports = GameController;
