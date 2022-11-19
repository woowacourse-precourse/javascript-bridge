const OutputView = require("../Views/OutputView");
const { Console } = require("@woowacourse/mission-utils");
const { SUCCESS, FAIL } = require("../Messages/constants");
const BridgeGame = require("../Model/BridgeGame");

let bridgeGame;

const GameController = {
  startGame(answer) {
    bridgeGame = new BridgeGame();
    bridgeGame.start(answer);
  },

  crossBridgeCompletely() {
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
      `게임 성공 여부: ${
        isClear ? SUCCESS : FAIL
      }\n총 시도한 횟수: ${bridgeGame.getGameRunCount()}`
    );
    Console.close();
  },
};

module.exports = GameController;
