const GameController = require('./GameController');
// inputCheck
const BridgeSize = require('../inputCheck/BridgeSize');
const Moving = require('../inputCheck/Moving');
const GameCommand = require('../inputCheck/GameCommand');
// constants
const { INPUT_VIEW } = require('../Constants');
// error
const ReadError = require('../error/ReadError');
const ValidationError = require('../error/ValidationError');

const BridgeController = class extends GameController {
  #view;

  #model;

  constructor(view, bridgeGame) {
    super(view, bridgeGame);
    this.#view = view;
    this.#model = bridgeGame;
  }

  runProcess() {
    this.#view.printStart();
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    const callbackInputBridgeSize = (size) => {
      this.checkBridgeSize(size);
      this.saveSize(size);
      this.prebuildBridge();
      this.inputMoving();
    };

    this.#view.readBridgeSize(INPUT_VIEW.size_message, callbackInputBridgeSize);
  }

  checkBridgeSize(input) {
    try {
      const bridgeSize = new BridgeSize(input);
      bridgeSize.checkInput();
    } catch (error) {
      this.errorHandler(error, this.inputBridgeSize.bind(this));
    }
  }

  saveSize(input) {
    this.#model.saveSize(input);
  }

  prebuildBridge() {
    this.#model.precompose();
  }

  inputMoving() {
    const callbackInputMoving = (moving) => {
      this.checkMoving(moving);
    };

    this.#view.readMoving(INPUT_VIEW.moving_message, callbackInputMoving);
  }

  checkMoving(input) {
    try {
      this.checkMovingInput(input);
    } catch (error) {
      return this.errorHandler(error, this.inputMoving.bind(this));
    }
    return this.saveMoving(input);
  }

  saveMoving(input) {
    this.#model.saveUpOrDown(input);
    return this.printMap(input);
  }

  printMap(input) {
    if (this.#model.isSamePreBuiltBridgeAsInput(input)) {
      this.#view.printMap(this.#model.move(input, INPUT_VIEW.pass));
      return this.passAllOrNot();
    }
    this.#view.printMap(this.#model.move(input, INPUT_VIEW.fail));
    return this.inputGameCommand();
  }

  passAllOrNot() {
    this.#model.increaseTryOrder();
    if (this.#model.isAllPass()) {
      return this.#view.printResult(this.#model.getData());
    }
    return this.inputMoving();
  }

  inputGameCommand() {
    const callbackGameCommand = (retryOrQuit) => {
      this.checkGameCommand(retryOrQuit);
    };

    this.#view.readGameCommand(INPUT_VIEW.game_command_message, callbackGameCommand);
  }

  checkGameCommand(input) {
    try {
      this.checkGameCommandInput(input);
    } catch (error) {
      return this.errorHandler(error, this.inputGameCommand.bind(this));
    }
    return this.retryOrQuit(input);
  }

  retryOrQuit(input) {
    if (BridgeController.isRetry(input)) {
      this.#model.retry();
      return this.inputMoving();
    }
    this.#view.printResult(this.#model.getData());
  }

  static isRetry(input) {
    const RETRY = 'R';
    return input === RETRY;
  }

  errorHandler(error, callback) {
    if (error instanceof ValidationError) {
      this.#view.printError(new ReadError('Validation Error', error));
      return callback();
    }
    throw error;
  }

  checkMovingInput(input) {
    const moving = new Moving(input);
    return moving.checkInput();
  }

  checkGameCommandInput(input) {
    const gameCommand = new GameCommand(input);
    return gameCommand.checkInput();
  }
};

module.exports = BridgeController;
