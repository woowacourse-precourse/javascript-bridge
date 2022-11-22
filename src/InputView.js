const MissionUtils = require("@woowacourse/mission-utils");

const OutputView = require("./OutputView");
const { checkBridgeSize, checkMovement, checkRestart } = require("./validate");
const { TEXT } = require("./constant");

const InputView = {
  readBridgeSize(bridge, bridgeGame) {
    MissionUtils.Console.readLine(TEXT.BRIDGE_SIZE, (size) => {
      if (checkBridgeSize(size)) return this.readBridgeSize(bridge, bridgeGame);

      bridge.setBridge(size);
      this.readMoving(bridge, bridgeGame);
      this.readGameCommand();
    });
  },

  isCrossing(bridge, bridgeGame) {
    if (bridgeGame.getCross()) {
      if (bridgeGame.getSuccess()) OutputView.printResult(bridgeGame);
      else this.readMoving(bridge, bridgeGame);
    }

    if (!bridgeGame.getCross()) this.readGameCommand(bridge, bridgeGame);
  },

  readMoving(bridge, bridgeGame) {
    MissionUtils.Console.readLine(TEXT.MOVEMENT, (movement) => {
      if (checkMovement(movement)) return this.readMoving(bridge, bridgeGame);

      bridgeGame.move(movement, bridge);
      OutputView.printMap(bridgeGame.getUpResult(), bridgeGame.getDownResult());

      this.isCrossing(bridge, bridgeGame);
    });
  },

  doRestart(restart, bridge, bridgeGame) {
    bridgeGame.retry(restart);
    this.readMoving(bridge, bridgeGame);
  },

  doQuit(bridgeGame) {
    OutputView.printResult(bridgeGame);
  },

  readGameCommand(bridge, bridgeGame) {
    MissionUtils.Console.readLine(TEXT.RETRY, (restart) => {
      if (checkRestart(restart)) this.readGameCommand(bridge, bridgeGame);

      if (restart === "R") this.doRestart(restart, bridge, bridgeGame);
      if (restart === "Q") this.doQuit(bridgeGame);
    });
  },
};

module.exports = InputView;
