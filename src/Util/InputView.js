const { Console } = require("@woowacourse/mission-utils");
const { GUIDE_MSG, ERROR_MSG, SUCCESS, FAIL } = require("./constants");
const BridgeGame = require("../BridgeGame");
const Validation = require("./Validation");
const OutputView = require("./OutputView");

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
    const bridgeGame = new BridgeGame();
    bridgeGame.start(answer);
    this.readMoving(bridgeGame);
  },

  readMoving(bridgeGame) {
    Console.readLine(GUIDE_MSG.PROGRESS_MSG, (answer) => {
      this.inputMovingForm(answer, bridgeGame);
    });
  },

  inputMovingForm(answer, bridgeGame) {
    try {
      if (!Validation.ValidMove(answer)) throw new Error();
      this.checkBridge(answer, bridgeGame);
    } catch (error) {
      Console.print(ERROR_MSG.INPUT_MOVING_ERROR);
      this.readMoving(bridgeGame);
    }
  },

  checkCrossTheBridgeCompletely(answer, bridgeGame) {
    OutputView.makeMap(answer, bridgeGame.getIdxAndIsCorrect());
    bridgeGame.crossBridgeCompletely()
      ? this.exitGame(bridgeGame, true)
      : this.readMoving(bridgeGame);
  },

  checkBridge(answer, bridgeGame) {
    bridgeGame.move(answer)
      ? this.checkCrossTheBridgeCompletely(answer, bridgeGame)
      : this.readGameCommand(answer, bridgeGame);
  },

  readGameCommand(answer, bridgeGame) {
    OutputView.makeMap(answer, bridgeGame.getIdxAndIsCorrect());
    this.inputGameCommand(bridgeGame);
  },

  inputGameCommand(bridgeGame) {
    Console.readLine(GUIDE_MSG.RETRY_MSG, (answer) => {
      this.inputGameCmdForm(answer, bridgeGame);
    });
  },

  inputGameCmdForm(answer, bridgeGame) {
    try {
      if (!Validation.ValidCmd(answer)) throw new Error();
      this.selectRestartOrQuit(answer, bridgeGame);
    } catch (error) {
      Console.print(ERROR_MSG.INPUT_CMD_ERROR);
      this.readGameCommand(null, bridgeGame);
    }
  },

  selectRestartOrQuit(answer, bridgeGame) {
    bridgeGame.retry(answer)
      ? this.restartGame(bridgeGame)
      : this.exitGame(bridgeGame, false);
  },

  restartGame(bridgeGame) {
    OutputView.clearMap();
    this.readMoving(bridgeGame);
  },

  exitGame(bridgeGame, isClear) {
    OutputView.printResult();
    Console.print(
      `게임 성공 여부: ${
        isClear ? SUCCESS : FAIL
      }\n총 시도한 횟수: ${bridgeGame.getGameCount()}`
    );
    Console.close();
  },
};

module.exports = InputView;
