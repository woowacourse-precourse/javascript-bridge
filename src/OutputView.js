const { Console } = require('@woowacourse/mission-utils');
const { convertBridge } = require('./utils/gameUtil');
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge) {
    bridge.map((el) => {
      Console.print('[ ' + `${el.join(' | ')}` + ' ]');
    });
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(resultBridge, round, gameResult) {
    Console.print('최종 게임 결과');
    resultBridge.map((el) => {
      Console.print('[ ' + `${el.join(' | ')}` + ' ]');
    });
    Console.print('게임 성공 여부: ' + gameResult);
    Console.print('총 시도한 횟수: ' + round);
    Console.close();
  },
};

module.exports = OutputView;
