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
  printMap(upperBridge, lowerBridge) {
    let upperStr = '[';
    let lowerStr = '[';
    for (let i in upperBridge) {
      upperStr += modifyCurStr(upperBridge[i]);
      lowerStr += modifyCurStr(lowerBridge[i]);
    }
    upperStr += '\b]';
    lowerStr += '\b]';
    Console.print(upperStr);
    Console.print(lowerStr);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {
    Console.print('printResult');
    Console.close();
  },
};

function modifyCurStr(char) {
  switch (char) {
    case 'o':
      return ' O |';
    case 'n':
      return '   |';
    case 'x':
      return ' X |';
  }
}

module.exports = OutputView;
