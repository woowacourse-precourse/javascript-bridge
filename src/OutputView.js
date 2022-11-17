const { Console } = require('@woowacourse/mission-utils');
const { STATE } = require('./Contants');

const OutputView = {
  printStart() {
    Console.print('다리 건너기 게임을 시작합니다.');
  },

  printMap(currentUpBridge, currentDownBridge) {
    Console.print(`[ ${currentUpBridge.join(' | ')} ]`);
    Console.print(`[ ${currentDownBridge.join(' | ')} ]\n`);
  },

  printResult(gameResult) {
    const {
      state, tryCount, upBridgeRoute, downBridgeRoute,
    } = gameResult;
    const strState = STATE.FAIL === state ? '실패' : '성공';
    Console.print('최종 게임 결과');
    OutputView.printMap(upBridgeRoute, downBridgeRoute);
    Console.print(`게임 성공 여부: ${strState}`);
    Console.print(`총 시도한 횟수: ${tryCount}`);
  },

  printError(error) {
    Console.print(`\n${error.message}`);
  },
};

module.exports = OutputView;
