const { Console } = require("@woowacourse/mission-utils");
const {
  GUIDE_MSG,
  ERROR_MSG,
  SUCCESS,
  FAIL,
} = require("../Messages/constants");
const BridgeGame = require("../Model/BridgeGame");
const {
  ValidCmd,
  ValidMove,
  ValidSize,
} = require("../Validation/CheckValidation");
const OutputView = require("./OutputView");

let bridgeGame;
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
    bridgeGame = new BridgeGame();
    bridgeGame.start(answer);
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
    } catch (error) {
      this.printMsgAndReadMovingAgain();
    }
  },

  checkInputMove(answer) {
    if (!ValidMove(answer)) throw new Error();
    this.checkBridge(answer);
  },

  printMsgAndReadMovingAgain() {
    Console.print(ERROR_MSG.INPUT_MOVING_ERROR);
    this.readMoving();
  },

  checkCrossTheBridgeCompletely(answer) {
    OutputView.makeMap(answer, bridgeGame.getIsCorrect());
    bridgeGame.crossBridgeCompletely()
      ? this.exitGame(true)
      : this.readMoving();
  },

  checkBridge(answer) {
    bridgeGame.checkInputCorrect(answer)
      ? this.checkCrossTheBridgeCompletely(answer)
      : this.showGameCommand(answer);
  },

  showGameCommand(answer) {
    OutputView.makeMap(answer, bridgeGame.getIsCorrect());
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
    } catch (error) {
      this.printMsgAndInputCmdAgain();
    }
  },

  checkInputCmd(answer) {
    if (!ValidCmd(answer)) throw new Error();
    this.selectRestartOrQuit(answer);
  },

  printMsgAndInputCmdAgain() {
    Console.print(ERROR_MSG.INPUT_CMD_ERROR);
    this.showGameCommand(null);
  },

  selectRestartOrQuit(answer) {
    bridgeGame.retry(answer) ? this.restartGame() : this.exitGame(false);
  },

  restartGame() {
    OutputView.clearMap();
    this.readMoving();
  },

  exitGame(isClear) {
    OutputView.printResult();
    Console.print(
      `게임 성공 여부: ${
        isClear ? SUCCESS : FAIL
      }\n총 시도한 횟수: ${bridgeGame.getGameRunCount()}`
    );
    Console.close();
  },
};

module.exports = InputView;
