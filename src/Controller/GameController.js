const OutputView = require("../View/OutputView");
const { Console } = require("@woowacourse/mission-utils");
const {
  SUCCESS,
  FAIL,
  SUCCESS_OR_NOT,
  COUNT_TRY,
} = require("../Messages/constants");
const BridgeGame = require("../Model/BridgeGame");

let bridgeGame;

const GameController = {
  startGame(answer) {
    bridgeGame = new BridgeGame();
    bridgeGame.start(answer);
  },

  crossBridgeCompletely(answer) {
    this.makeMap(answer);
    return bridgeGame.crossBridgeCompletely();
  },

  checkInputCorrect(answer) {
    return bridgeGame.checkInputCorrect(answer);
  },

  makeMap(answer) {
    OutputView.makeMap(answer, bridgeGame.getIsCorrect());
  },

  clearMap() {
    OutputView.clearMap();
  },

  selectGame(answer) {
    return bridgeGame.retry(answer);
  },

  exitGame(isClear) {
    OutputView.printResult();
    Console.print(
      SUCCESS_OR_NOT +
        `${isClear ? SUCCESS : FAIL}` +
        COUNT_TRY +
        `${bridgeGame.getGameRunCount()}`
    );
    Console.close();
  },
};

module.exports = GameController;
