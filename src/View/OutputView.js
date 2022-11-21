const Message = require("../utils/Message");
const { Console } = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   *게임의 첫 시작을 알리는 문구 출력
   */
  printGreeting() {
    Console.print(Message.GREETING);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * @param {string[]} bridges upBridge와 downBridge가 순서대로 담긴 배열
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridges) {
    bridges.forEach((bridge) => {
      Console.print(bridge);
    });
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * @param {string[]} bridges 문자열 upBridge와 downBridge가 순서대로 담긴 배열
   * @param {string} message 성공/실패 여부를 담은 문자열
   * @param {number} tries 게임 시도 횟수
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridges, message, tries) {
    Console.print(Message.RESULT);
    this.printResultMaps(bridges);
    this.printSuccessOrFail(message);
    this.printTries(tries);
    this.consoleClose();
  },

  printResultMaps(bridges) {
    this.printMap(bridges);
  },

  printSuccessOrFail(message) {
    Console.print(message);
  },

  printTries(tries) {
    Console.print(Message.returnTries(tries));
  },

  consoleClose() {
    Console.close();
  },
};

module.exports = OutputView;
