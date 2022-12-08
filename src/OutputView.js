const { GAME_MESSAGE } = require('../constants/game.constants');
const { Console } = require('@woowacourse/mission-utils');
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  
  printBegin () {
    Console.print(GAME_MESSAGE.START);
  },

  printBlankLine () {
    Console.print('');
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap (printList) {
    Console.print(printList);
    this.printBlankLine();
  },


  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult (isSuccess, printList, count) {
    Console.print(GAME_MESSAGE.RESULT);
    this.printMap(printList);
    this.printSuccessAndTryCount(isSuccess, count);
    Console.close();
  },

  printSuccessAndTryCount (isSuccess, count) {
    Console.print(
      GAME_MESSAGE.SUCCESS_OR_NOT
        + (isSuccess ? GAME_MESSAGE.SUCCESS : GAME_MESSAGE.FAIL)
        + GAME_MESSAGE.TRY_NUMBER
        + count,
    );
  },

  printError (error) {
    return Console.print(error.message);
  },
};

module.exports = OutputView;
