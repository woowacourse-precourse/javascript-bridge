const MissionUtils = require('@woowacourse/mission-utils');
const ServiceMessages = require('./ServiceMessages');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStartMessage() {
    MissionUtils.Console.print(ServiceMessages.START);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(map) {
    MissionUtils.Console.print(
      `[ ${map[0].join(' | ')} ]\n[ ${map[1].join(' | ')} ]\n`,
    );
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(map, successOrFail, totalCount) {
    MissionUtils.Console.print(`\n${ServiceMessages.FINAL_RESULT}\n`);
    this.printMap(map);
    MissionUtils.Console.print(
      `${ServiceMessages.IS_SUCCESS}: ${successOrFail} \n ${ServiceMessages.TOTAL_COUNT}: ${totalCount}\n`,
    );
  },

  printErrorMessages(error) {
    MissionUtils.Console.print(error);
  },
};

module.exports = OutputView;
