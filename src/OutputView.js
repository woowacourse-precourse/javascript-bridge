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
  printMap(bridge, game) {
    const length = game.getLength();
    let resultFirstLine = '[ ';

    for (let i = 0; i < length; i += 1) {
      const selectedElement = game.getSelected(i);
      const bridgeElement = bridge.getBridge(i);

      if (selectedElement === '0') {
        if (bridgeElement === '0') {
          resultFirstLine += 'O ';
        } else if (bridgeElement === '1') {
          resultFirstLine += 'X ';
        }
      } else if (selectedElement === '1') {
        resultFirstLine += '  ';
      }
      if (i !== length - 1) resultFirstLine += '| ';
    }

    resultFirstLine += ']';

    let resultSecondLine = '[ ';

    for (let i = 0; i < length; i += 1) {
      const selectedElement = game.getSelected(i);
      const bridgeElement = bridge.getBridge(i);

      if (selectedElement === '1') {
        if (bridgeElement === '1') {
          resultSecondLine += 'O ';
        } else if (bridgeElement === '0') {
          resultSecondLine += 'X ';
        }
      } else if (selectedElement === '0') {
        resultSecondLine += '  ';
      }
      if (i !== length - 1) resultSecondLine += '| ';
    }
    resultSecondLine += ']';

    Console.print(resultFirstLine);
    Console.print(resultSecondLine);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
