const { Console } = require('@woowacourse/mission-utils');
const Messages = require('./Messages');

const OutputView = {
  startGame() {
    Console.print(Messages.START_GAME);
  },

  printMap(up, down) {
    Console.print(`[ ${up.join(' | ')} ]`);
    Console.print(`[ ${down.join(' | ')} ]\n`);
  },

  printResult(totalCount, hasCorrect, [up, down]) {
    Console.print(Messages.END_GAME);
    this.printMap(up, down);

    Console.print(`게임 성공 여부: ${hasCorrect ? '성공' : '실패'}`);
    Console.print(`총 시도한 횟수: ${totalCount}`);
    Console.close();
  },
};

module.exports = OutputView;
