const { ERROR } = require('./utils/constants');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const Bridge = require('./model/Bridge');
const BridgeGame = require('./BridgeGame');
const Map = require('./model/Map');

class GameController {
  #bridge;
  #bridgeGame;
  #map;

  constructor() {
    this.#map = new Map();
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
    const moveSuccess = this.#bridgeGame.move(moving);
    OutputView.printMap(this.#map.updateMap(moving, moveSuccess));
    InputView.readMoving(this.validateMoving.bind(this));
  }
}

module.exports = GameController;
