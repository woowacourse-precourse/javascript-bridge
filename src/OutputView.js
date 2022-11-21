const MissionUtils = require('@woowacourse/mission-utils');
const BridgeMap = require('./BridgeMap');
const { ERROR, GAME } = require('./Constants');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printEmptyLine() {
    MissionUtils.Console.print('');
  },

  printStart() {
    MissionUtils.Console.print(GAME.start);
    OutputView.printEmptyLine();
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap() {
    const { map } = BridgeMap;
    map.forEach((way) => {
      const stringMap = way.join(' | ');
      MissionUtils.Console.print(`[ ${stringMap} ]`);
    });
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(isSuccess, playCount) {
    MissionUtils.Console.print(GAME.end);
    OutputView.printMap();
    if (isSuccess) MissionUtils.Console.print(GAME.success);
    if (!isSuccess) MissionUtils.Console.print(GAME.fail);
    MissionUtils.Console.print(`${GAME.try}${playCount}`);
    MissionUtils.Console.close();
  },

  printError(message) {
    MissionUtils.Console.print(`${ERROR.prefix}${message}`);
  },
};

module.exports = OutputView;
