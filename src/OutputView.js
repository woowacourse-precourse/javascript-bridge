const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('./Constants');

const OutputView = {
  printMap([up, down]) {
    Console.print(`[ ${up.join(' | ')} ]`);
    Console.print(`[ ${down.join(' | ')} ]`);
    Console.print('');
  },

  printResult() {},
};

module.exports = OutputView;
