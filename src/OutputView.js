const { Console } = require('@woowacourse/mission-utils');
const OutputView = {

  printStart(){
    Console.print("다리건너기 게임을 시작합니다.\n");
  },
  printMap([upBridge, downBridge]) {
    Console.print(`[ ${upBridge.join(' | ')} ]\n[ ${downBridge.join(' | ')} ]\n`);
  },

  printResult(myWay, isSuccess, attempts) {
    Console.print(`최종 게임 결과\n`);
    this.printMap(myWay, attempts);
    Console.print(`게임 성공 여부: ${isSuccess ? '성공' : '실패'}\n총 시도한 횟수: ${attempts}`);
  },
};

module.exports = OutputView;
