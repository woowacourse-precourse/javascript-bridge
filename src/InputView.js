const { Console } = require("@woowacourse/mission-utils");
const { GAME_MESSAGES } = require("./Constants");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");
const Validate = require("./Validate");

const InputView = {
  size: "",
  gameClient: "",

  insertSize(size) {
    this.size = Number(size);
    this.gameClient = new BridgeGame(this.size);
    this.readMoving();
  },

  readBridgeSize() {
    Console.readLine(GAME_MESSAGES.ASK_TO_BRIDGE_LENGTH, (size) => {
      try {
        this.sizeValidate(size);
        this.insertSize(size);
      } catch (error) {
        this.printInputSizeError(error);
      }
    });
  },

  sizeValidate(size) {
    Validate.checkSizeInputType(size);
    Validate.checkSizeInputRange(size);
  },

  printInputSizeError(error) {
    OutputView.printError(error);
    this.readBridgeSize();
  },

  gameRestart() {
    this.gameClient.retry();
    this.readMoving(this.gameClient, this.size);
  },

  readMoving() {
    Console.readLine(GAME_MESSAGES.ASK_TO_MOVE_BLOCKS, (direction) => {
      try {
        Validate.checkDirectionInputType(direction);
        this.insertMoving(direction);
      } catch (error) {
        this.printInputDirectionError(error);
      }
    });
  },

  printInputDirectionError(error) {
    OutputView.printError(error);
    this.readMoving();
  },

  insertMoving(direction) {
    this.gameClient.move(direction);
    this.checkIncludeWrongDirection();
    this.checkMatchBridgeSize();
  },

  checkIncludeWrongDirection() {
    if (!this.gameClient.checkWrongInput()) {
      this.readGameCommand();
    }
  },

  checkMatchBridgeSize() {
    if (!this.gameClient.getMatchSize()) {
      this.readMoving();
    }
  },

  readGameCommand() {
    Console.readLine(GAME_MESSAGES.ASK_OPINION_FOR_RESTART, (command) => {
      try {
        Validate.checkRetryCommandType(command);
        this.insertCommand(command);
      } catch (error) {
        this.printInputCommandError(error);
      }
    });
  },

  printInputCommandError(error) {
    OutputView.printError(error);
    this.readGameCommand();
  },

  insertCommand(command) {
    if (command === "R") {
      this.gameRestart();
      return;
    }
    this.gameClient.fail();
    return;
  },
};

module.exports = InputView;
