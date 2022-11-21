const { Console } = require("@woowacourse/mission-utils");
const { PROMPT, ERROR } = require("./Constants/Constants");
const OutputView = require("./OutputView");
const ValidCheck = require("./ValidCheck/ValidCheck");
const BridgeGameController = require("./BridgeGameController");

const InputView = {
  bridgeGameControl: new BridgeGameController(),

  readBridgeSize() {
    Console.readLine(PROMPT.READ_SIZE, this.readBridgeSizeCallback.bind(this));
  },

  readBridgeSizeCallback(size) {
    try {
      ValidCheck.sizeInput(size);
      this.bridgeGameControl.makeBridgeGame(size);
      this.readMoving();
    } 
    catch (error) {
      OutputView.printErrorMessage(ERROR.SIZE_ERROR);
      this.readBridgeSize();
    }
  },

  readMoving() {
    Console.readLine(PROMPT.READ_MOVING, this.readMovingCallback.bind(this));
  },

  readMovingCallback(moving) {
    try {
      ValidCheck.movingInput(moving);
      const isWrong = this.bridgeGameControl.manageMoving(moving);
      isWrong ? this.isGameEnd() : this.readGameCommand();
    } catch (error) {
      OutputView.printErrorMessage(ERROR.MOVING_ERROR);
      this.readMoving();
    }
  },

  isGameEnd() {
    const isGameEnd = this.bridgeGameControl.isGameEnd();
    isGameEnd ? this.bridgeGameControl.gameOver(isGameEnd) : this.readMoving();
  },

  readGameCommand() {
    Console.readLine(PROMPT.READ_COMMAND, this.readGameCommandCallback.bind(this));
  },
  
  readGameCommandCallback(command) {
    try {
      ValidCheck.commandInput(command);
      const isRetry = this.bridgeGameControl.manageCommand(command);
      isRetry ? this.readMoving() : this.bridgeGameControl.gameOver();
    } catch (error) {
      OutputView.printErrorMessage(ERROR.COMMAND_ERROR);
      this.readGameCommand();
    }
  },
};

module.exports = InputView;