const { START_GAME, END_GAME } = require('./Messages');
const { Console } = require("@woowacourse/mission-utils");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStartMessage() {
    Console.print(START_GAME);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(upAndDown) {
    console.log(upAndDown[0]);
    console.log(upAndDown[1]);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(upAndDown, retryNum, isSuccess) {
    console.log(END_GAME.RESULT);
    OutputView.printMap(upAndDown);
    if(isSuccess === true) {
      isSuccess = '성공';
    } else {
      isSuccess = '실패';
    }
    console.log(END_GAME.IS_SUCCESS.concat(isSuccess));
    console.log(END_GAME.TOTAL_RETRY.concat(retryNum));
    Console.close();
  },
};
module.exports = OutputView;
