const { Console } = require('@woowacourse/mission-utils');
const { INFO_MESSAGES } = require('./utils/messages');
const {
  RESULT,
  IS_SUCCESS,
  SUCCESS_STRING,
  FAILURE_STRING,
} = require('./utils/constants');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStartMessage() {
    Console.print(INFO_MESSAGES.GAME_START);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
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

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
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
