const { Console } = require("@woowacourse/mission-utils");
const Player = require("./Player");
const { MESSAGE } = require("./constant/Constants");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap() {
    Console.print(MESSAGE.BRIDGE_STATE_MESSAGE(Player.state[0]));
    Console.print(`${MESSAGE.BRIDGE_STATE_MESSAGE(Player.state[1])}\n`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {
    Console.print(MESSAGE.RESULT_MESSAGE);
    this.printMap();
    Console.print(MESSAGE.SUCCESS_STATE_MESSAGE(Player.gameSuccess));
    Console.print(MESSAGE.TRYING_COUNT_MESSAGE(Player.tryingCount));
    Console.close();
  },

  printStart() {
    Console.print(MESSAGE.START_MESSAGE);
  },
};

module.exports = OutputView;
