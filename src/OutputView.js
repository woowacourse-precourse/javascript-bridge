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

  printResult() {},
};

module.exports = OutputView;
