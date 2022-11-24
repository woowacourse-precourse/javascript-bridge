const GameController = require('./GameController');
// inputCheck
const BridgeSize = require('../inputCheck/BridgeSize');
const Moving = require('../inputCheck/Moving');
const GameCommand = require('../inputCheck/GameCommand');
// constants
const { INPUT_VIEW } = require('../Constants');

const BridgeController = class extends GameController {
  constructor(inputView, outputView, bridgeGame) {
    super(inputView, outputView, bridgeGame);
  }

  runProcess() {
    this.outputView.printStartMessage();
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    const callbackInputBridgeSize = (size) => {
      this.checkBridgeSize(size);
      this.saveSize(size);
      this.prebuildBridge();
      this.inputMoving();
    };

    this.inputView.readBridgeSize(INPUT_VIEW.size_message, callbackInputBridgeSize);
  }

  checkBridgeSize(input, confirmedInput = null) {
    try {
      const bridgeSize = new BridgeSize(input);
      confirmedInput = bridgeSize.checkInput();
    } catch (error) {
      this.errorHandler(error, this.inputBridgeSize.bind(this));
    }
  }

  saveSize(input) {
    this.bridgeGame.saveSize(input);
  }

  prebuildBridge() {
    this.bridgeGame.precompose();
  }

  inputMoving() {
    const callbackInputMoving = (moving) => {
      this.checkMoving(moving);
    };

    this.inputView.readMoving(INPUT_VIEW.moving_message, callbackInputMoving);
  }

  checkMoving(input, confirmedInput = null) {
    try {
      confirmedInput = this.checkMovingInput(input);
    } catch (error) {
      this.errorHandler(error, this.inputMoving.bind(this));
    }
    return this.saveMoving(input);
  }

  saveMoving(input) {
    this.bridgeGame.saveUpOrDown(input);
    return this.printMap(input);
  }

  printMap(input) {
    if (this.bridgeGame.isSamePreBuiltBridgeAsInput(input)) {
      this.outputView.printMap(this.bridgeGame.move(input, INPUT_VIEW.pass));
      return this.passAllOrNot();
    }
    this.outputView.printMap(this.bridgeGame.move(input, INPUT_VIEW.fail));
    return this.inputGameCommand();
  }

  passAllOrNot() {
    this.bridgeGame.increaseTryOrder();
    if (this.bridgeGame.isAllPass()) {
      this.outputView.printResult(this.bridgeGame.getData());
    }
    return this.inputMoving();
  }

  inputGameCommand() {
    const callbackGameCommand = (retryOrQuit) => {
      this.checkGameCommand(retryOrQuit);
    };

    this.inputView.readGameCommand(INPUT_VIEW.game_command_message, callbackGameCommand);
  }

  checkGameCommand(input) {
    try {
      this.checkGameCommandInput(input);
    } catch (error) {
      this.errorHandler(error, this.inputGameCommand.bind(this));
    }
    return this.retryOrQuit(input);
  }

  retryOrQuit(input) {
    if (BridgeController.isRetry(input)) {
      this.bridgeGame.retry();
      return this.inputMoving();
    }
    this.outputView.printResult(this.bridgeGame.getData());
  }

  static isRetry(input) {
    const RETRY = 'R';
    return input === RETRY;
  }

  errorHandler(error, callback) {
    this.outputView.printError(error.message);
    callback();
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
