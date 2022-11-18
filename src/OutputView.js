/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const { Console } = require('@woowacourse/mission-utils');
const { BRIDGE_MOVEMENT } = require("./constants");

const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * @param {Array} bridgeMoving 다리 건넌 진행상황 : 위 칸이면 U, 아래 칸이면 D로 표현한다.
   * @return {string[]}
   *
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  printMap(bridgeMoving) {
    const upSide = [];
    const downSide = [];
    bridgeMoving.forEach((moving) => {
      moving == BRIDGE_MOVEMENT.UP ? upSide.push("O") : upSide.push(' ');
      moving == BRIDGE_MOVEMENT.DOWN ? downSide.push("O") : downSide.push(' ');
    });
    Console.print(`[ ${upSide.join(' | ')} ]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
