const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const ValidateSize = require("./Validation/ValidateSize");
const ValidateMoving = require("./Validation/ValidateMoving");
const ValidateCommand = require("./Validation/ValidateCommand"); // Validation 통합 예정
const OutputView = require("./OutputView");
const { GUIDE_MSG } = require("./constants");

const InputView = {
  readBridgeSize() {
    Console.readLine(GUIDE_MSG.START_MSG, (answer) => {
      ValidateSize(answer);
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
      ValidateMoving(answer);
      this.checkBridge(answer, bridgeGame);
      if (bridgeGame.crossBridgeCompletely()) this.exitGame();
    });
  },

  checkBridge(answer, bridgeGame) {
    bridgeGame.move(answer)
      ? this.readMoving(bridgeGame)
      : this.readGameCommand(bridgeGame);
  },

  readGameCommand(bridgeGame) {
    Console.readLine(GUIDE_MSG.RETRY_MSG, (answer) => {
      ValidateCommand(answer);
      bridgeGame.retry(answer) ? this.readMoving(bridgeGame) : this.exitGame();
    });
  },

  exitGame() {
    OutputView.printResult();
    Console.close();
  },
};

module.exports = InputView;
