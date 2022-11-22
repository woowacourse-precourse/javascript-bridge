const { Console } = require('@woowacourse/mission-utils');
const OutputView = {

  printStart(){
    Console.print("다리건너기 게임을 시작합니다.");
  },
  printEnterBridgeSize(){
    Console.print("다리의 길이를 입력해주세요.")
  },
  printChooseMoving(){
    Console.print("이동할 칸을 선택해주세요. (위: U, 아래: D)");
  },
  printEnterGameCommand(){
    Console.print("게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)");
  },
  printMap([upBridge, downBridge]) {
    Console.print(`[ ${upBridge.join(' | ')} ]\n[ ${downBridge.join(' | ')} ]\n`);
  },

  printResult(myWay, isSuccess, attempts) {
    Console.print(`최종 게임 결과`);
    this.printMap(myWay, attempts);
    Console.print(`게임 성공 여부: ${isSuccess ? '성공' : '실패'}\n총 시도한 횟수: ${attempts}`);
  },
};

module.exports = OutputView;
