const { COMMAND, ERROR } = require('./utils/constants');
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

    if (moveSuccess) {
      InputView.readMoving(this.validateMoving.bind(this));
    } else {
      InputView.readGameCommand(this.validateGameCommand.bind(this));
    }
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
      // TODO 게임 다시 시작하기 기능
      // this.#bridgeGame.retry();
      // InputView.readMoving(this.validateMoving.bind(this));
    } else if (command === COMMAND.quit) {
      // TODO 최종 게임 결과 출력 기능
    }
  }
}

module.exports = GameController;
