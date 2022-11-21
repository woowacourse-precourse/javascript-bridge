const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE_START } = require('./utils/constant');

const OutputView = {
  printStartGame() {
    Console.print(MESSAGE_START);
  },

  printError(errorMessage) {
    Console.print(errorMessage);
  },

  printMap(path) {
    Console.print('[' + path.upside.join('|') + ']');
    Console.print('[' + path.downside.join('|') + ']\n');
  },

  printResult(path, gameResult, attempts) {
    Console.print('최종 게임 결과');
    OutputView.printMap(path);

    Console.print('게임 성공 여부: ' + gameResult);
    Console.print('총 시도한 횟수: ' + attempts);
    Console.close();
  },
};

module.exports = OutputView;
