const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('./Constants');

const OutputView = {
  printMap([up, down]) {
    Console.print(`[ ${up.join(' | ')} ]`);
    Console.print(`[ ${down.join(' | ')} ]`);
    Console.print('');
  },

  printResult(game) {
    Console.print(GAME_MESSAGE.RESULT);

    OutputView.printMap(game.map);

    Console.print(GAME_MESSAGE.SUCCESS(game.isSuccess));
    Console.print(GAME_MESSAGE.NUMBER_OF_TIMES(game.totalPlay));
  },
};

module.exports = OutputView;
