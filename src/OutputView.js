const { Console } = require("@woowacourse/mission-utils");
const { NOTICE, SUCCESS, FAILURE } = require("./constants");

const OutputView = {
  printStartingMessage() {
    Console.print(NOTICE.START_GAME);
  },

  printEndingMessage() {
    Console.print(NOTICE.END_GAME);
  },

  printInputErrorMessage(errorMessage) {
    Console.print(errorMessage);
  },

  printMap(bridgeGame) {
    const gameMap = bridgeGame.getMap();
    gameMap.forEach((rowMap) => {
      Console.print(`[ ${rowMap.join(" | ")} ]`);
    });
  },

  printClear(bridgeGame) {
    const isClear = bridgeGame.isClear();
    Console.print(`\n게임 성공 여부: ${isClear ? SUCCESS : FAILURE}`);
  },

  printRunCount(bridgeGame) {
    const runCount = bridgeGame.getRunCount();
    Console.print(`총 시도한 횟수: ${runCount}`);
  },

  printResult(bridgeGame) {
    OutputView.printEndingMessage();
    OutputView.printMap(bridgeGame);
    OutputView.printClear(bridgeGame);
    OutputView.printRunCount(bridgeGame);
  },
};

module.exports = OutputView;
