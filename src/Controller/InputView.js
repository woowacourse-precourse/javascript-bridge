const { Console } = require("@woowacourse/mission-utils");
const GameController = require("./GameController");
const { GUIDE_MSG, ERROR_MSG } = require("../Messages/constants");
const {
  ValidCmd,
  ValidMove,
  ValidSize,
} = require("../Validation/CheckValidation");

const InputView = {
  readBridgeSize() {
    Console.readLine(GUIDE_MSG.START_MSG, (answer) => {
      this.inputSizeForm(answer);
    });
  },

  inputSizeForm(answer) {
    try {
      this.checkInputSize(answer);
      this.startBridgeGame(answer);
    } catch (error) {
      this.printMsgAndReadSizeAgain();
    }
  },

  checkInputSize(answer) {
    if (!ValidSize(answer)) throw new Error();
  },

  printMsgAndReadSizeAgain() {
    Console.print(ERROR_MSG.INPUT_SIZE_ERROR);
    this.readBridgeSize();
  },

  startBridgeGame(answer) {
    GameController.startGame(answer);
    this.readMoving();
  },

  readMoving() {
    Console.readLine(GUIDE_MSG.PROGRESS_MSG, (answer) => {
      this.inputMovingForm(answer);
    });
  },

  inputMovingForm(answer) {
    try {
      this.checkInputMove(answer);
      this.checkBridge(answer);
    } catch (error) {
      this.printMsgAndReadMovingAgain();
    }
  },

  checkInputMove(answer) {
    if (!ValidMove(answer)) throw new Error();
  },

  printMsgAndReadMovingAgain() {
    Console.print(ERROR_MSG.INPUT_MOVING_ERROR);
    this.readMoving();
  },

  checkCrossTheBridgeCompletely(answer) {
    GameController.makeMap(answer);
    GameController.crossBridgeCompletely()
      ? GameController.exitGame(true)
      : this.readMoving();
  },

  checkBridge(answer) {
    GameController.checkInputCorrect(answer)
      ? this.checkCrossTheBridgeCompletely(answer)
      : this.showGameCommand(answer);
  },

  showGameCommand(answer) {
    GameController.makeMap(answer);
    this.readGameCommand();
  },

  readGameCommand() {
    Console.readLine(GUIDE_MSG.RETRY_MSG, (answer) => {
      this.inputGameCmdForm(answer);
    });
  },

  inputGameCmdForm(answer) {
    try {
      this.checkInputCmd(answer);
      this.selectRestartOrQuit(answer);
    } catch (error) {
      this.printMsgAndInputCmdAgain();
    }
  },

  checkInputCmd(answer) {
    if (!ValidCmd(answer)) throw new Error();
  },

  printMsgAndInputCmdAgain() {
    Console.print(ERROR_MSG.INPUT_CMD_ERROR);
    this.showGameCommand(null);
  },

  selectRestartOrQuit(answer) {
    GameController.selectGame(answer)
      ? this.restartGame()
      : GameController.exitGame(false);
  },

  restartGame() {
    GameController.clearMap();
    this.readMoving();
  },
};

module.exports = InputView;
