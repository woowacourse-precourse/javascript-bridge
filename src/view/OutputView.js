const { Console } = require('@woowacourse/mission-utils');
const Trimmer = require('../Trimmer');
const { MOVE_RESULT } = require('../constant/Constant');

const OutputView = {
  printMessage(message) {
    Console.print(message);
  },

  printMap(gameResult) {
    Console.print(`${gameResult.bridge}\n`);
  },

  printResult(gameResult) {
    Console.print(
      Trimmer.templateTrim(`
        최종 게임 결과
        ${gameResult.bridge}
    
        게임 성공 여부: ${gameResult.roundResult === MOVE_RESULT.CLEAR ? '성공' : '실패'}
        총 시도한 횟수: ${gameResult.attempt}`)
    );
    Console.close();
  },
};

module.exports = OutputView;
