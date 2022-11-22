const GameController = require("./GameController");
// inputCheck
const BridgeSize = require("../inputCheck/BridgeSize");
const Moving = require("../inputCheck/Moving");
const GameCommand = require("../inputCheck/GameCommand");
// constants
const { INPUT_VIEW } = require("../Constants");
const { Console } = require("@woowacourse/mission-utils");

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
      this.prebuildBridge(size);
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

  saveSize(input) {
    this.bridgeGame.saveSize(input);
  }

  prebuildBridge(input) {
    this.bridgeGame.precompose(input);
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
      this.outputView.printError(error);
    } finally {
      if (confirmedInput !== input) return this.inputMoving();
      return this.saveMoving(input);
    }
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
    this.inputGameCommand();
  }

  passAllOrNot() {
    this.bridgeGame.increaseTryOrder();
    if (this.bridgeGame.isAllPass()) {
      this.outputView.printResult(this.bridgeGame.returnBridgeData());
      return Console.close();
    }
    return this.inputMoving();
  }

  inputGameCommand() {
    const callbackGameCommand = (retryOrQuit) => {
      this.checkGameCommand(retryOrQuit);
    };

    this.inputView.readGameCommand(INPUT_VIEW.game_command_message, callbackGameCommand);
  }

  checkGameCommand(input, confirmedInput = null) {
    try {
      confirmedInput = this.checkGameCommandInput(input);
    } catch (error) {
      this.outputView.printError(error);
    } finally {
      if (confirmedInput !== input) return this.inputGameCommand();
      return this.retryOrQuit(input);
    }
  }

  retryOrQuit(input) {
    if (BridgeController.isRetry(input)) {
      this.bridgeGame.retry();
      return this.inputMoving();
    }
    this.outputView.printResult(this.bridgeGame.returnBridgeData());
    Console.close();
  }

  static isRetry(input) {
    const RETRY = "R";
    return input === RETRY;
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
