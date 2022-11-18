const { Console } = require('@woowacourse/mission-utils');
const { upAndDown, splitUpAndDown } = require('./Utils/arrayUtils');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(input, size, isPassed) {
    const upAndDownArray = upAndDown(input, size, isPassed);
    const { upArray, downArray } = splitUpAndDown(upAndDownArray);
    Console.print(`[ ${upArray.join().replace(/,/gi, ' | ')} ]`);
    Console.print(`[ ${downArray.join().replace(/,/gi, ' | ')} ]\n`);
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(isClear) {
    if (isClear) Console.print('게임 성공 여부: 성공');
    if (!isClear) Console.print('게임 성공 여부: 실패');
  },
};

module.exports = OutputView;
