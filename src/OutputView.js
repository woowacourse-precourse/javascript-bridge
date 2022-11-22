const { Console } = require("@woowacourse/mission-utils");
const { OUTPUT } = require("./constants/messages");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 게임 시작 메세지를 출력한다.
   */
  printStart() {
    Console.print(`${OUTPUT.START}${OUTPUT.LINE}`);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(movingList) {
    const upperList = movingList.upper.join(OUTPUT.DIVISION);
    const lowerList = movingList.lower.join(OUTPUT.DIVISION);
    Console.print(OUTPUT.MAP(upperList));
    Console.print(OUTPUT.MAP(lowerList));
    Console.print(OUTPUT.BLANK);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(movingList, result, attempts) {
    Console.print(`${OUTPUT.RESULT}`);
    this.printMap(movingList);
    Console.print(OUTPUT.SUCCESS(result));
    Console.print(`${OUTPUT.ATTEMPTS(attempts)}`);
    Console.close();
  },
};

module.exports = OutputView;
