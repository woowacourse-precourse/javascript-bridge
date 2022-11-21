const { Console } = require("@woowacourse/mission-utils");
const { BRIDGE_INPUT_MESSAGES } = require("../constants/Messages");

const OutputView = {
  // 첫 시작 메세지를 출력한다.
  printOpening() {
    Console.print(BRIDGE_INPUT_MESSAGES.OPENING);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * @param up {string[]} 위쪽 다리 성공여부
   * @param down {string[]} 아래쪽 다리 성공여부
   */
  printMap({ up, down }) {
    const upLineToPrint = up.join(" | ");
    const downLineToPrint = down.join(" | ");
    Console.print(`[ ${upLineToPrint} ]`);
    Console.print(`[ ${downLineToPrint} ]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
