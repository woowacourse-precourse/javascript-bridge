const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, BRIDGE } = require('./Constants');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  startGame() {
    Console.print(MESSAGE.GAME_START);
  },
  printError(errorMessage) {
    Console.print(errorMessage);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(oneLinedBridge) {
    Console.print(BRIDGE.START + oneLinedBridge.join(BRIDGE.SEPERATOR) + BRIDGE.END);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(result) {
    Console.print(MESSAGE.FINAL_RESULT);
    this.printMap(result.upperBridge);
    this.printMap(result.lowerBridge);
    const finalResult = result.isCompleted ? MESSAGE.COMPLETE : MESSAGE.FAIL;
    Console.print(MESSAGE.IS_COMPLETED + finalResult);
    Console.print(MESSAGE.NUMBER_OF_TRIES + result.tries);
    Console.close();
  },
};

module.exports = OutputView;
