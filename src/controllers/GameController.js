const OutputView = require('../views/OutputView');
const InputView = require('../views/InputView');

const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');

const BridgeGame = require('../models/BridgeGame');
const StateManager = require('../models/StateManager');

const MapGenerator = require('../models/MapGenerator');

class GameContoller {
  #bridgeGame;

  #stateManager = new StateManager();

  #gameStatusMap = {
    PLAYING: this.inputMoving.bind(this),
    FAIL: this.inputGameCommand.bind(this),
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
    this.#bridgeGame = new BridgeGame(bridge, this.#stateManager);

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
    const gameStatus = this.#stateManager.getGameStatus();
    this.#gameStatusMap[gameStatus]();
  }

  inputGameCommand() {
    InputView.readGameCommand(this.onInputGameCommand.bind(this));
  }

  onInputGameCommand(command) {}
}

module.exports = GameContoller;
