const OutputView = require("../View/OutputView");
const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("../Model/BridgeGame");
const DrawBridge = require("../Model/DrawBridge");

let bridgeGame;

const GameController = {
  startGame(answer) {
    bridgeGame = new BridgeGame();
    bridgeGame.start(answer);
  },

  /**
   * @param {string} answer Map을 만들기 위해 U/D를 넘기는 인자.
   * @returns {function(): boolean} 다리를 전부 건넜는지 판단하고 boolean 반환하는 함수.
   */
  crossBridgeCompletely(answer) {
    this.makeMap(answer);
    return bridgeGame.crossBridgeCompletely();
  },

  checkInputCorrect(answer) {
    return bridgeGame.checkInputCorrect(answer);
  },

  makeMap(answer) {
    DrawBridge.makeMap(answer, bridgeGame.getIsCorrect());
  },

  clearMap() {
    DrawBridge.clearMap();
  },

  selectGame(answer) {
    return bridgeGame.retry(answer);
  },

  exitGame(isClear) {
    OutputView.printResult(
      isClear,
      bridgeGame.getGameRunCount(),
      DrawBridge.getBridge()
    );
    DrawBridge.clearMap();
    Console.close();
  },
};

module.exports = GameController;
