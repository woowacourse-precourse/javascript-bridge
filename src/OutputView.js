const { Console } = require('@woowacourse/mission-utils');
const { convertBridge } = require('./utils/gameUtil');
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge, user) {
    const up = convertBridge(bridge, user, 'U');
    const down = convertBridge(bridge, user, 'D');
    Console.print('[ ' + `${up.join(' | ')}` + ' ]');
    Console.print('[ ' + `${down.join(' | ')}` + ' ]');
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridge, user) {
    Console.print('최종 게임 결과');
    this.printMap(bridge, user);
    Console.print('게임 성공 여부: 실패');
    Console.print('총 시도한 횟수: 1');
  },
};

module.exports = OutputView;
