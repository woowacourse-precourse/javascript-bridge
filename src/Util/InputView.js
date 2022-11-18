const { Console } = require("@woowacourse/mission-utils");
const { GUIDE_MSG, ERROR_MSG, SUCCESS, FAIL } = require("./constants");
const BridgeGame = require("../BridgeGame");
const Validation = require("./Validation");
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
      if (!Validation.ValidSize(answer)) throw new Error();
      this.startBridgeGame(answer);
    } catch (error) {
      Console.print(ERROR_MSG.INPUT_SIZE_ERROR);
      this.readBridgeSize();
    }
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
      if (!Validation.ValidMove(answer)) throw new Error();
      this.checkBridge(answer);
    } catch (error) {
      Console.print(ERROR_MSG.INPUT_MOVING_ERROR);
      this.readMoving();
    }
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
      if (!Validation.ValidCmd(answer)) throw new Error();
      this.selectRestartOrQuit(answer);
    } catch (error) {
      Console.print(ERROR_MSG.INPUT_CMD_ERROR);
      this.showGameCommand(null);
    }
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
