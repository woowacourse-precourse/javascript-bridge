const { Console } = require('@woowacourse/mission-utils');
const { BRIDGE_ELEMENT, OUTPUT_MESSAGE } = require('./utils/Constant');

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
    this.printLine(bridge, game, BRIDGE_ELEMENT.UP);
    this.printLine(bridge, game, BRIDGE_ELEMENT.DOWN);
  },

  printLine(bridge, game, select) {
    const message = this.setMessage(bridge, game, select);
    Console.print(message);
  },

  setMessage(bridge, game, dependency) {
    const length = game.getLength();

    let message = OUTPUT_MESSAGE.START;

    for (let i = 0; i < length; i += 1) {
      const selectedElement = game.getSelected(i);
      const bridgeElement = bridge.getBridge(i);

      if (i !== 0) message += OUTPUT_MESSAGE.LINE;
      if (selectedElement === dependency) {
        if (bridgeElement === selectedElement) {
          message += OUTPUT_MESSAGE.CORRECT;
        } else if (bridgeElement !== selectedElement) {
          message += OUTPUT_MESSAGE.INCORRECT;
        }
      } else {
        message += OUTPUT_MESSAGE.EMPTY;
      }
    }

    return message + OUTPUT_MESSAGE.END;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
