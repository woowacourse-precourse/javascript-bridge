const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printStart() {
    Console.print('다리 건너기 게임을 시작합니다.');
  },

  printMap(currentUpBridge, currentDownBridge) {
    Console.print(`[ ${currentUpBridge.join(' | ')} ]`);
    Console.print(`[ ${currentDownBridge.join(' | ')} ]\n`);
  },

  printResult(gameResult) {
    const { state, tryCount } = gameResult;
    Console.print(`게임 성공 여부: ${state}`);
    Console.print(`총 시도한 횟수: ${tryCount}`);
    Console.close();
  },
};

module.exports = OutputView;
