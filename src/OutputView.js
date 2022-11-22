const { Console } = require('@woowacourse/mission-utils');
const { ERROR_MESSAGE, GAME_MESSAGE } = require('./Constants');

const OutputView = {
  printMap(userMoveInputCollection) {
    userMoveInputCollection.forEach((side) => {
      Console.print(side);
    });
  },

  printResult(bridge, isWin, tryCount) {
    Console.print(GAME_MESSAGE.result);
    this.printMap(bridge);
    Console.print(`게임 성공 여부: ${isWin ? GAME_MESSAGE.success : GAME_MESSAGE.fail}`);
    Console.print(`총 시도한 횟수: ${tryCount}`);
  },

  printGameStartMsg() {
    Console.print(GAME_MESSAGE.start);
  },

  printWrongInputOfBridgeLength() {
    Console.print(ERROR_MESSAGE.invalidRangeInput);
  },

  printWrongInputOfMoving() {
    Console.print(ERROR_MESSAGE.invalidMoveInput);
  },

  printWrongInputOfRetryOrQuit() {
    Console.print(ERROR_MESSAGE.invalidCommandInput);
  },
};

module.exports = OutputView;
