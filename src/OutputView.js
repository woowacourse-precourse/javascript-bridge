const {Console} = require("@woowacourse/mission-utils");

const OutputView = {
  printStart() {
    Console.print("다리 건너기 게임을 시작합니다.")
  },

  printMap(bridge, status){
    const up = status.map((el, index)=>{
      return el==='U'?(el===bridge[index]?'O':'X'):' ';
    })
    const down = status.map((el, index)=>{
      return el==='D'?(el===bridge[index]?'O':'X'):' ';
    })
    Console.print(`[ ${up.join(' | ')} ]\n[ ${down.join(' | ')} ]`);
  },

  printResult(userBridge, isSuccess) {
    Console.print(`최종 게임 결과\n`);
    this.printMap(userBridge.bridge, userBridge.status);
    Console.print(`\n게임 성공 여부: ${isSuccess?"성공":"실패"}\n`);
    Console.print(`총 시도한 횟수: ${userBridge.attempts}`)
  },
};

module.exports = OutputView;
