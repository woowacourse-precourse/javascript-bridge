const {Console} = require("@woowacourse/mission-utils");

const OutputView = {
  printStart() {
    Console.print("다리 건너기 게임을 시작합니다.")
  },

  printMap(status, isSuccess) {
    let up  = status.map((el)=> el==='U'?'O':' ' );
    let down= status.map((el)=> el==='D'?'O':' ' );
    const last = status.length-1;
    if(!isSuccess){
      up[last]  = up[last]==='O'?'X':' ';
      down[last]= down[last]==='O'?'X':' ';
    }
    Console.print(`[ ${up.join(' | ')} ]\n[ ${down.join(' | ')} ]`);
  },
  
  printResult() {},
};

module.exports = OutputView;
