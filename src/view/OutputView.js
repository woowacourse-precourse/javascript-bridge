const { Console } = require("@woowacourse/mission-utils");
const { INFO_MESSAGES } = require("../utils/messages");
const {
  RESULT,
  IS_SUCCESS,
  SUCCESS_STRING,
  FAILURE_STRING,
} = require("../utils/constants");

const OutputView = {
  printStartMessage() {
    Console.print(INFO_MESSAGES.GAME_START);
  },

  printMap(gameInfo, readFuncs) {
    Console.print(gameInfo.map);

    this.progressGame(gameInfo, readFuncs);
  },

  progressGame(gameInfo, readFuncs) {
    const { RIGHT, WRONG } = RESULT;
    const { map, lastResult, originBridgeSize, currentBridgeSize, tryCount } =
      gameInfo;
    const { readMoving, readGameCommand } = readFuncs;

    if (lastResult === WRONG) readGameCommand(map, this.printResult.bind(this));
    if (lastResult === RIGHT && originBridgeSize !== currentBridgeSize)
      readMoving();
    if (lastResult === RIGHT && originBridgeSize === currentBridgeSize)
      this.printResult(map, IS_SUCCESS.TRUE, tryCount);
  },

  printResult(map, isSuccess, tryCount) {
    Console.print(this.createResultMessage(map, isSuccess, tryCount));

    this.endGame();
  },

  createResultMessage(map, isSuccess, tryCount) {
    const { RESULT_TITLE, SUCCESS_TITLE, TRY_TITLE } = INFO_MESSAGES;

    const gameResult = `${RESULT_TITLE}${map}\n`;
    const successResult = `${SUCCESS_TITLE}${
      isSuccess ? SUCCESS_STRING : FAILURE_STRING
    }`;
    const tryResult = `${TRY_TITLE}${tryCount}`;

    return `${gameResult}${successResult}${tryResult}`;
  },

  endGame() {
    Console.close();
  },
};

module.exports = OutputView;
