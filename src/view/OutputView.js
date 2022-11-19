const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE, BRIDGE_COMPONENT } = require('../utils/gameMessage');

const OutputView = {
  printGameStart() {
    Console.print(GAME_MESSAGE.GAME_START);
  },

  printMap(movingResult) {
    let { upResultArr: upResultArr, downResultArr: downResultArr } =
      movingResult;
    this.printMapFrame(upResultArr);
    this.printMapFrame(downResultArr);
  },

  printMapFrame(arr) {
    Console.print(
      BRIDGE_COMPONENT.BEGIN +
        arr.join(BRIDGE_COMPONENT.DIVIDER) +
        BRIDGE_COMPONENT.END
    );
  },

  printResult(movingResult, attemptsNum, isSuccess) {
    Console.print(GAME_MESSAGE.GAME_RESULT);
    this.printMap(movingResult);
    Console.print(GAME_MESSAGE.GAME_STATUS + (isSuccess ? '성공' : '실패'));
    Console.print(GAME_MESSAGE.GAME_ATTEMPTS + attemptsNum);
    Console.close();
  },
};

module.exports = OutputView;
