const { Console } = require('@woowacourse/mission-utils');
const OutputView = {
  
  printMap([upBridge, downBridge]) {
    Console.print(`[ ${upBridge.join(' | ')} ]`);
    Console.print(`[ ${downBridge.join(' | ')} ]`);
  },


  printResult({ isSuccess, attempCount }) {
    Console.print(`\n게임 성공 여부: ${isSuccess ? '성공' : '실패'}`);
    Console.print(`총 시도한 횟수: ${attempCount}`);
  },
};

module.exports = OutputView;
