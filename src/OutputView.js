const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeResult) {
    Console.print(bridgeResult);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridgeResult, isSuccess, count) {
    Console.print(`\n최종 게임 결과\n${bridgeResult}\n`);
    const successContext = isSuccess ? '성공' : '실패';
    const gameResult = `게임 성공 여부: ${successContext}\n총 시도한 횟수: ${count}`;
    Console.print(gameResult);
    Console.close();
  },

  /**
   * 에러를 출력한다.
   */
  printError(error) {
    Console.print(error);
  },

  /**
   * 게임 시작 문구를 출력한다.
   */
  printStart() {
    Console.print('다리 건너기 게임을 시작합니다.');
  },
};

module.exports = OutputView;
