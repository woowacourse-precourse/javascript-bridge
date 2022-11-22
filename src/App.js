const BridgeGame = require('./models/BridgeGame');
const InputView = require('./views/InputView');
const OutputView = require('./views/OutputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { GAME_COMMAND_STRING } = require('./utils/constants');
const Validator = require('./utils/Validator');

class App {
  #model;

  play() {
    OutputView.printStart();
    InputView.readBridgeSize(this.#handleBridgeSize.bind(this));
  }

  #handleBridgeSize(input) {
    try {
      Validator.checkBridgeSize(input);
      this.#initModel(Number(input));
    } catch (e) {
      OutputView.printError(e.message);
      InputView.readBridgeSize(this.#handleBridgeSize.bind(this));
    }
  }

  #initModel(size) {
    const bridge = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
    this.#model = new BridgeGame(bridge);
    InputView.readMoving(this.#handleMoving.bind(this));
  }

  #handleMoving(input) {
    try {
      Validator.checkMoving(input);
      this.#moveModel(input);
    } catch (e) {
      OutputView.printError(e.message);
      InputView.readMoving(this.#handleMoving.bind(this));
    }
  }

  #moveModel(moving) {
    this.#model.move(moving);
    OutputView.printMap(this.#model.getMoveList());
    this.#decideMoving();
  }

  #decideMoving() {
    if (this.#model.getFinalResult() === true) {
      OutputView.printResult(this.#model.getMoveList(), this.#model.getTryCount());
    } else if (this.#model.getLastResult() === true) {
      InputView.readMoving(this.#handleMoving.bind(this));
    } else {
      InputView.readGameCommand(this.#handleGameCommand.bind(this));
    }
  }

  #handleGameCommand(input) {
    try {
      Validator.checkGameCommand(input);
      this.#decideRetry(input);
    } catch (e) {
      OutputView.printError(e.message);
      InputView.readGameCommand(this.#handleGameCommand.bind(this));
    }
  }

  #decideRetry(gameCommand) {
    if (gameCommand === GAME_COMMAND_STRING.quit) {
      OutputView.printResult(this.#model.getMoveList(), this.#model.getTryCount());
    } else {
      this.#model.retry();
      InputView.readMoving(this.#handleMoving.bind(this));
    }
  }
}

module.exports = App;
