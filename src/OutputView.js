const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('./constant/input');

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(movingLists) {
    const [upList, downList] = movingLists;
    Console.print(`[ ${upList.join(' | ')} ]`);
    Console.print(`[ ${downList.join(' | ')} ]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(result, bridgeGame) {
    const [movingLists, countOfGameAttempts] = bridgeGame.getTotal();
    Console.print(INPUT_MESSAGE.result);
    this.printMap(movingLists);
    Console.print(INPUT_MESSAGE.isSuccess(result));
    Console.print(INPUT_MESSAGE.allCount(countOfGameAttempts));
    Console.close();
  },
};

module.exports = OutputView;
