const Console = require('../utils/Console');
const { MESSAGE_GAME } = require('../constants/messages');

const OutputView = {
  printStartMessage() {
    Console.print(MESSAGE_GAME.START);
  },

  printMap(map) {
    Console.print(map);
  },

  printResult(result, { successOrFailure, tryCount }) {
    Console.print('최종 게임 결과');
    Console.print(result);
    Console.print(`게임 성공 여부: ${successOrFailure}`);
    Console.print(`총 시도한 횟수: ${tryCount}`);
  },
};

module.exports = OutputView;
