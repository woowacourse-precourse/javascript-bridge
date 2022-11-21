const { Console } = require('@woowacourse/mission-utils');
const { STEP, MESSAGE } = require('../Utils/constants');

const OutputView = {
  printGameStart() {
    Console.print(`${MESSAGE.GAME_START}\n`);
  },
  
  printSide(line) {
    let printSide = '[ ' + line.join(' | ') + ' ]';
    Console.print(printSide);
  },

  printMap(bridgeGame) {
    this.printSide(bridgeGame.getSide(STEP.UP));
    this.printSide(bridgeGame.getSide(STEP.DOWN));
    Console.print('');
  },

  printResult(bridgeGame) {
    Console.print(MESSAGE.RESULT);
    this.printMap(bridgeGame);
    Console.print(`${MESSAGE.SUCCESS_OR_FAIL} ${bridgeGame.getResult()}`);
    Console.print(`${MESSAGE.TRY_COUNT} ${bridgeGame.getTryCount()}`);
  },
};

module.exports = OutputView;
