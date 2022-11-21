const { Console } = require('@woowacourse/mission-utils');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const correct = ' O |';
const incorrect = '   |';

const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridgeHistory) {
    const line = this.setBridgeMap(bridgeHistory);
    Console.print(line[0]);
    Console.print(line[1]);
  },

  setBridgeMap(bridgeHistory) {
    let line = ['[', '['];
    bridgeHistory.map((direction) => {
      if (direction === 'U') {
        line[0] += correct;
        line[1] += incorrect;
      } else {
        line[0] += incorrect;
        line[1] += correct;
      }
    });
    line[0] = line[0].slice(0, -1);
    line[1] = line[1].slice(0, -1);
    line[0] += ']';
    line[1] += ']';

    return line;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
