const { Console } = require('@woowacourse/mission-utils');
const Trimmer = require('../Trimmer');
const { MOVE_RESULT } = require('../constant/Constant');

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },
};

module.exports = OutputView;
