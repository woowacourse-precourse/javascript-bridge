const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const Validation = require("./Validation");
const OutputView = require("./OutputView");
const { GUIDE_MSG } = require("./constants");

const InputView = {
  readBridgeSize() {
    Console.readLine(GUIDE_MSG.START_MSG, (answer) => {
      Validation.ValidSize(answer);
      this.startBridgeGame(answer);
    });
  },

  startBridgeGame(answer) {
    const bridgeGame = new BridgeGame();
    bridgeGame.start(answer);
    this.readMoving(bridgeGame);
  },

  readMoving(bridgeGame) {
    Console.readLine(GUIDE_MSG.PROGRESS_MSG, (answer) => {
      Validation.ValidMove(answer);
      this.checkBridge(answer, bridgeGame);
    });
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
    Console.readLine(GUIDE_MSG.RETRY_MSG, (answer) => {
      Validation.ValidCmd(answer);
      bridgeGame.retry(answer)
        ? this.restartGame(bridgeGame)
        : this.exitGame(bridgeGame, false);
    });
  },

  restartGame(bridgeGame) {
    OutputView.clearMap();
    this.readMoving(bridgeGame);
  },

  exitGame(bridgeGame, isClear) {
    OutputView.printResult();
    Console.print(
      `게임 성공 여부: ${
        isClear ? "성공" : "실패"
      }\n총 시도한 횟수: ${bridgeGame.getGameCount()}`
    );
    Console.close();
  },
};

module.exports = InputView;
