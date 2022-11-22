const { Console } = require('@woowacourse/mission-utils');
const GAME_SETTING = require('../constants/Setting');
const { PROCESS_MESSAGE } = require('../constants/Message');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart() {
    Console.print(PROCESS_MESSAGE.start);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(upperBlocks, lowerBlocks) {
    Console.print(
      `${GAME_SETTING.leftBracket} ${upperBlocks} ${GAME_SETTING.rightBracket}`
    );
    Console.print(
      `${GAME_SETTING.leftBracket} ${lowerBlocks} ${GAME_SETTING.rightBracket}`
    );
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(upperBlocks, lowerBlocks, isSuccessAndTryCount) {
    let successOrFailure = isSuccessAndTryCount[0];
    const tryCount = isSuccessAndTryCount[1];
    if (successOrFailure) successOrFailure = GAME_SETTING.sucess;
    if (successOrFailure === false) successOrFailure = GAME_SETTING.fail;
    Console.print(PROCESS_MESSAGE.result);
    Console.print(
      `${GAME_SETTING.leftBracket} ${upperBlocks} ${GAME_SETTING.rightBracket}`
    );
    Console.print(
      `${GAME_SETTING.leftBracket} ${lowerBlocks} ${GAME_SETTING.rightBracket}\n`
    );
    Console.print(`${PROCESS_MESSAGE.successOrFailure} ${successOrFailure}`);
    Console.print(`${PROCESS_MESSAGE.tryCount} ${tryCount}`);
    Console.close();
  },

  printError(message) {
    Console.print(message);
  },
};

module.exports = OutputView;
