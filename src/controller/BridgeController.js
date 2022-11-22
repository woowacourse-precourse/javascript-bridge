const { INPUT_VIEW } = require('../Constants');
const BridgeSize = require('../inputCheck/BridgeSize');
const { Console } = require('@woowacourse/mission-utils');
const GameController = require('./GameController');
const Moving = require('../inputCheck/Moving');
const GameCommand = require('../inputCheck/GameCommand');

const BridgeController = class extends GameController {
  constructor(inputView, outputView, bridgeGame) {
    super(inputView, outputView, bridgeGame);
  }

  runProcess() {
    this.inputBridgeSize();
  }

  inputBridgeSize() {
    const callbackInputBridgeSize = (size) => {
      this.checkBridgeSize(size);
      super.saveSize(size);
      super.prebuildBridge(size);
      this.inputMoving();
    };

    this.inputView.readBridgeSize(INPUT_VIEW.size_message, callbackInputBridgeSize);
  }

  checkBridgeSize(input, confirmedInput = null) {
    try {
      const bridgeSize = new BridgeSize(input);
      confirmedInput = bridgeSize.checkInput();
    } catch (error) {
      this.outputView.printError(error);
    } finally {
      if (confirmedInput !== input) return this.inputBridgeSize();
    }
  }

  inputMoving() {
    const callbackInputMoving = (moving) => {
      this.checkMoving(moving);
      super.saveMoving(moving);
      this.printMap(moving);
    };

    this.inputView.readMoving(INPUT_VIEW.moving_message, callbackInputMoving);
  }

  checkMoving(input, confirmedInput = null) {
    try {
      const moving = new Moving(input);
      confirmedInput = moving.checkInput();
    } catch (error) {
      this.outputView.printError(error);
    } finally {
      if (confirmedInput !== input) return this.inputMoving();
    }
  }

  printMap(input) {
    if (this.bridgeGame.isSamePreBuiltBridgeAsInput(input)) {
      this.outputView.printMap(this.bridgeGame.move(input, INPUT_VIEW.pass));
      return this.passAllOrNot();
    }
    this.outputView.printMap(this.bridgeGame.move(input, INPUT_VIEW.fail));
    this.inputGameCommand();
  }

  passAllOrNot() {
    this.bridgeGame.increaseTryOrder();
    if (this.bridgeGame.isAllPass()) {
      this.outputView.printResult(this.bridgeGame.returnBridgeData());
      return this.bridgeGame.end();
    }
    return this.inputMoving();
  }

  inputGameCommand() {
    const callbackGameCommand = (retryOrQuit) => {
      this.checkGameCommand(retryOrQuit);
      this.retryOrQuit(retryOrQuit);
    };

    this.inputView.readGameCommand(INPUT_VIEW.game_command_message, callbackGameCommand);
  }

  checkGameCommand(input, confirmedInput = null) {
    try {
      const gameCommand = new GameCommand(input);
      confirmedInput = gameCommand.checkInput();
    } catch (error) {
      this.outputView.printError(error);
    } finally {
      if (confirmedInput !== input) return this.inputMoving();
    }
  }

  retryOrQuit(input) {
    if (BridgeController.isRetry(input)) {
      this.bridgeGame.retry();
      return this.inputMoving();
    }
    this.outputView.printResult(this.bridgeGame.returnBridgeData());
    this.bridgeGame.end();
  }

  static isRetry(input) {
    const RETRY = 'R';
    return input === RETRY;
  }
};

module.exports = BridgeController;
