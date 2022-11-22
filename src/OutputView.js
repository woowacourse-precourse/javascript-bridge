const MissionUtils = require('@woowacourse/mission-utils');
const Constants = require('./Constants');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 * - 제공된 `OutputView` 객체를 활용해 구현해야 한다.
- `OutputView`의 파일 경로는 변경할 수 있다.
- `OutputView`의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
- 값 출력을 위해 필요한 메서드를 추가할 수 있다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(map) {
    const [up, down] = OutputView.convertMap(map);
    MissionUtils.Console.print(up);
    MissionUtils.Console.print(down);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(map, tryNumber, result) {
    const [up, down] = OutputView.convertMap(map);
    MissionUtils.Console.print(Constants.Output.FINAL_RESULT);
    MissionUtils.Console.print(up);
    MissionUtils.Console.print(down);
    MissionUtils.Console.print(`${Constants.Output.SUCCESS_OR_FAILURE} ${result}`);
    MissionUtils.Console.print(`${Constants.Output.NUMBER_OF_TRY} ${tryNumber}`);
    MissionUtils.Console.close();
  },

  convertMap(map) {
    const { U, D } = map;
    const up = `[ ${U.join(' | ')} ]`;
    const down = `[ ${D.join(' | ')} ]`;
    return [up, down];
  },
};

module.exports = OutputView;
