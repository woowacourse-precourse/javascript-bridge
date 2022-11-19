/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 * 제공된 OutputView 객체를 활용해 구현해야 한다.
 * OutputView의 파일 경로는 변경할 수 있다.
 * OutputView의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
 * 값 출력을 위해 필요한 메서드를 추가할 수 있다.
 */
const MissionUtils = require('@woowacourse/mission-utils');
const { MESSAGE, BRIDGE_SIDE } = require('../Constants');

const { Console } = MissionUtils;
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * @param {[Array<string>,Array<string>]} arr 'O'와 'X'가 표시된 다리의 map
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(arr) {
    const upside = arr[BRIDGE_SIDE.UP].join(' | ');
    const downside = arr[BRIDGE_SIDE.DOWN].join(' | ');
    Console.print(`[ ${upside} ]\n[ ${downside} ]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * @param {number} result 게임의 결과
   * @param {[Array<string>,Array<string>]} arr 'O'와 'X'가 표시된 다리의 map
   * @param {number} attempts 게임 시도횟수
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(result, arr, attempts) {
    Console.print(MESSAGE.FINAL_RESULT);
    this.printMap(arr);
    Console.print(MESSAGE.SUCCESS_OR_FAIL(result));
    Console.print(MESSAGE.NUMBER_OF_ATTEMPTS(attempts));
  },

  printStart() {
    Console.print(MESSAGE.START_GAME);
  },

  close() {
    Console.close();
  },
};
module.exports = OutputView;
