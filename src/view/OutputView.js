const { Console } = require('@woowacourse/mission-utils');
const Messages = require('../static/Messages');

const OutputView = {
  startGame() {
    Console.print(Messages.START_GAME);
  },

  printMap(up, down) {
    Console.print(`[ ${up.join(' | ')} ]`);
    Console.print(`[ ${down.join(' | ')} ]\n`);
  },

  printResult(totalTry, hasCorrect, [up, down]) {
    Console.print(Messages.END_GAME);
    this.printMap(up, down);

    const SUCCESS = '성공';
    const FAIL = '실패';
    Console.print(`${Messages.GAME_RESULT} ${hasCorrect ? SUCCESS : FAIL}`);
    Console.print(`${Messages.TOTAL_TRY} ${totalTry}`);
    Console.close();
  },
};

module.exports = OutputView;
