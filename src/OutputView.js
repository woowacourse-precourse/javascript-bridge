const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGES } = require('./Messages');
const { BRIDGE_CONSTANTS } = require('./GameConstants');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStartMessage() {
    Console.print(GAME_MESSAGES.gameStart);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(index, IS_MOVE, bridgeAnswer) {
    const upMap = ['['];
    const downMap = ['['];
    for (let i = 0; i < index; i += 1) {
      const shape = bridgeAnswer[i];
      if (shape === BRIDGE_CONSTANTS.up) {
        upMap.push(' O |');
        downMap.push('   |');
      } else {
        upMap.push('   |');
        downMap.push(' O |');
      }
    }

    const lastShape = bridgeAnswer[index];
    if (IS_MOVE) {
      if (lastShape === BRIDGE_CONSTANTS.up) {
        upMap.push(' O ');
        downMap.push('   ');
      } else {
        upMap.push('   ');
        downMap.push(' O ');
      }
    } else {
      if (lastShape === BRIDGE_CONSTANTS.up) {
        upMap.push('   ');
        downMap.push(' X ');
      } else {
        upMap.push(' X ');
        downMap.push('   ');
      }
    }

    upMap.push(']');
    downMap.push(']');

    Console.print(upMap.join(''));
    Console.print(downMap.join(''));
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
