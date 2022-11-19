const MissionUtils = require('@woowacourse/mission-utils');

const { Console } = MissionUtils;
const { MESSAGE_SUCCESS_BOOLEAN, MESSAGE_TRY_COUNT } = require('./constants');

const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap() {},

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(gameComplete, gameTryCount) {
    const RESULT = gameComplete ? '성공' : '실패';
    Console.print(`${MESSAGE_SUCCESS_BOOLEAN}${RESULT}`);
    Console.print(`${MESSAGE_TRY_COUNT}${gameTryCount}`);
  },
};

module.exports = OutputView;
