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
  printMap(upperResult, lowerResult) {
    MissionUtils.Console.print(
      `[ ${upperResult.join(' | ')} ]\n[ ${lowerResult.join(' | ')} ]`,
    );
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(upperResult, lowerResult, gameResult, totalCount) {
    const successOrFail = gameResult === 'O' ? '성공' : '실패';
    MissionUtils.Console.print('\n최종 게임 결과\n');
    this.printMap(upperResult, lowerResult);
    MissionUtils.Console.print(
      `\n게임 성공 여부: ${successOrFail}\n 총 시도한 횟수: ${totalCount}`,
    );
  },

  printErrorMessages(error) {
    MissionUtils.Console.print(error);
  },
};

module.exports = OutputView;
