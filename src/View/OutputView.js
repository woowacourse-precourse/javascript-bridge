const MissionUtils = require('@woowacourse/mission-utils');
const MESSAGE = {
  START: '다리 건너기 게임을 시작합니다.',
  SUCCESS: '성공',
  FAIL: '실패',
  GAME_RESULT: '\n최종 게임 결과',
  IS_SUCCESS: '\n게임 성공 여부: ',
  TRY_COUNT: '총 시도한 횟수: ',
};
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printStart() {
    MissionUtils.Console.print(MESSAGE.START);
  },

  printMap(result) {
    MissionUtils.Console.print(result);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(result, count, status) {
    const RESULT = status ? MESSAGE.SUCCESS : MESSAGE.FAIL;
    MissionUtils.Console.print(MESSAGE.GAME_RESULT);
    MissionUtils.Console.print(result);
    MissionUtils.Console.print(`${MESSAGE.IS_SUCCESS}${RESULT}`);
    MissionUtils.Console.print(`${MESSAGE.TRY_COUNT}${count}`);
  },

  printError(error) {
    MissionUtils.Console.print(error);
  },
};

module.exports = OutputView;
