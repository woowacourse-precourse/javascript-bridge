const { Console } = require('@woowacourse/mission-utils');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  GREETING: '다리 건너기 게임을 시작합니다.\n',
  FINAL_RESULT: '\n최종 게임 결과',
  IS_COMPLETED: '\n게임 성공 여부: ',
  TRY_COUNT: '총 시도한 횟수: ',
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap({ upFloors, downFloors }) {
    Console.print(upFloors);
    Console.print(downFloors);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult({ map, result }) {
    const { isCompleted, tryCount } = result;

    Console.print(OutputView.FINAL_RESULT);
    OutputView.printMap(map);

    Console.print(`${OutputView.IS_COMPLETED}${isCompleted}`);
    Console.print(`${OutputView.TRY_COUNT}${tryCount}`);

    Console.close();
  },

  printGreeting() {
    Console.print(OutputView.GREETING);
  },
};

module.exports = OutputView;
