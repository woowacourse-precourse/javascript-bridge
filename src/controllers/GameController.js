const OutputView = require('../views/OutputView');
const InputView = require('../views/InputView');

const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');

const BridgeGame = require('../models/BridgeGame');
const { validate, isCommandInput } = require('../Validator');

const MapGenerator = require('../models/MapGenerator');

class GameContoller {
  #bridgeGame;

  #gameStatusMap = {
    PLAYING: this.inputMoving.bind(this),
    FAIL: this.inputGameCommand.bind(this),
    CLEAR: this.onGameOver.bind(this, '성공'),
  };

  start() {
    OutputView.printStarting();
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    InputView.readBridgeSize(this.onInputBridgeSize.bind(this));
  }

  onInputBridgeSize(size) {
    const bridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate,
    );
    this.#bridgeGame = new BridgeGame(bridge);

    this.inputMoving();
  }

  inputMoving() {
    InputView.readMoving(this.onInputMoving.bind(this));
  }

  onInputMoving(moving) {
    this.#bridgeGame.move(moving);

    const map = MapGenerator.toString();
    OutputView.printMap(map);

    this.checkGameStatus();
  }

  checkGameStatus() {
    const stateManager = this.#bridgeGame.getStateManager();

    const gameStatus = stateManager.getGameStatus();
    this.#gameStatusMap[gameStatus]();
  }

  inputGameCommand() {
    InputView.readGameCommand(this.onInputGameCommand.bind(this));
  }

  onInputGameCommand(command) {
    validate(command, isCommandInput);

    if (command === 'R') {
      this.onRetryCommand();
      return;
    }

    this.onGameOver('실패');
  }

  onRetryCommand() {
    this.#bridgeGame.retry();

    this.checkGameStatus();
  }

  onGameOver(status) {
    const map = MapGenerator.toString();

    const stateManager = this.#bridgeGame.getStateManager();
    const tryCount = stateManager.getTryCount();

    OutputView.printResult(map, status, tryCount);
  }
}

module.exports = GameContoller;
