/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, BRIDGE } = require('./constant/constant');

const OutputView = {
  printStart() {
    Console.print(MESSAGE.START);
  },

  printEnter() {
    Console.print('');
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap({ up, down }) {
    Console.print(BRIDGE.START + up.join(BRIDGE.SEPARATE) + BRIDGE.END);
    Console.print(`${BRIDGE.START}${down.join(BRIDGE.SEPARATE)}${BRIDGE.END}\n`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(upDown, gameResult, tryCount) {
    Console.print(MESSAGE.FINAL_RESULT);
    Console.print(BRIDGE.START + upDown.up.join(BRIDGE.SEPARATE) + BRIDGE.END);
    Console.print(`${BRIDGE.START}${upDown.down.join(BRIDGE.SEPARATE)}${BRIDGE.END}\n`);
    Console.print(MESSAGE.SUCCESS_OR_FAIL + gameResult);
    Console.print(MESSAGE.TOTAL_NUMBER + tryCount);
    Console.close();
  },
};

module.exports = OutputView;
