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

  printLine(bridge, game, targetElement) {
    const message = this.setMessage(bridge, game, targetElement);
    Console.print(message);
  },

  setMessage(bridge, game, targetElement) {
    const length = game.getLength();
    let message = OUTPUT_MESSAGE.START;
    message += this.getMessageBody(bridge, game, targetElement, length);
    return message + OUTPUT_MESSAGE.END;
  },

  getMessageBody(bridge, game, targetElement, length) {
    let message = '';
    for (let i = 0; i < length; i += 1) {
      if (i !== 0) message += OUTPUT_MESSAGE.LINE;
      message += this.getMessageElement(bridge, game, targetElement, i);
    }
    return message;
  },

  getMessageElement(bridge, game, targetElement, i) {
    const selectedElement = game.getSelected(i);
    const bridgeElement = bridge.getBridge(i);
    return selectedElement !== targetElement
      ? OUTPUT_MESSAGE.EMPTY
      : selectedElement === bridgeElement
      ? OUTPUT_MESSAGE.CORRECT
      : OUTPUT_MESSAGE.INCORRECT;
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
