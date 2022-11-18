/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const { Console } = require('@woowacourse/mission-utils');
const { GAME } = require("./constants");

const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * @param {Array} bridgeMoving 다리 건넌 진행상황 : 위 칸이면 U, 아래 칸이면 D로 표현한다.
   * @return {string[]}
   *
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  makeUpside(isSuccess, upMove) {
    const upSide = [];
    for (let i = 0; i < upMove.length - 1; i += 1) {
      upMove[i] ? upSide.push(BRIDGE_MOVEMENT.SUCCESS) : upSide.push(' ');
    }
    upMove[upMove.length - 1]
      ? upSide.push(isSuccess ? BRIDGE_MOVEMENT.SUCCESS : BRIDGE_MOVEMENT.FAIL)
      : upSide.push(" ");
    return upSide;
  },

  makeDownside(isSuccess, downMove) {
    const downSide = [];
    for (let i = 0; i < downMove.length - 1; i += 1) {
      downMove[i] ? downSide.push(BRIDGE_MOVEMENT.SUCCESS) : downSide.push(' ');
    }
    downMove[downMove.length - 1]
      ? downSide.push(
          isSuccess ? BRIDGE_MOVEMENT.SUCCESS : BRIDGE_MOVEMENT.FAIL
        )
      : downSide.push(" ");
    return downSide;
  },

  printMap([isSuccess, upMove, downMove]) {
    Console.print(`[ ${this.makeUpside(isSuccess, upMove).join(" | ")} ]`);
    Console.print(`[ ${this.makeDownside(isSuccess, downMove).join(" | ")} ]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {
    Console.print(GAME.END_RESULT);
  },

  printSucessOrFail(isSuccess) {
    Console.print(`${GAME.RESULT}${isSuccess ? "성공" : "실패"}`);
  },

  printTryCount(gameCount) {
    Console.print(`${GAME.TRY_COUNT}${gameCount}`);
  },
};

module.exports = OutputView;
