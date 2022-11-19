const { Console } = require('@woowacourse/mission-utils');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge, movingLog) {
    let map = '';
    ['U', 'D'].forEach(direction => {
      map += this.getLine(direction, bridge, movingLog);
      map += '\n';
    });

    Console.print(map);
  },

  getLine(direction, bridge, movingLog) {
    const line = Array(movingLog.length).fill(' ');
    movingLog.forEach((value, idx) => {
      if (value === direction && value === bridge[idx]) line[idx] = 'O';
      if (value === direction && value !== bridge[idx]) line[idx] = 'X';
    });

    return `[ ${line.join(' | ')} ]`;
  },

  printIntro() {
    Console.print('다리 건너기 게임을 시작합니다.\n');
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridge, movingLog, tryCount) {
    const isSuccess = !!(
      movingLog.length === bridge.length &&
      movingLog[movingLog.length - 1] === bridge[bridge.length - 1]
    );

    Console.print('최종 게임 결과');
    this.printMap(bridge, movingLog);
    Console.print(`게임 성공 여부: ${isSuccess ? '성공' : '실패'}\n총 시도한 횟수: ${tryCount}`);
  },
};

module.exports = OutputView;
