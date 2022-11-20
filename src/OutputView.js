const {Console} = require("@woowacourse/mission-utils");
const Messages = require("./Messages");

const OutputView = {
  printStart() {
    Console.print(Messages.output_start());
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
    Console.print(Messages.output_result());
    this.printMap(userBridge.bridge, userBridge.status);

    Console.print(Messages.output_success(isSuccess));
    Console.print(Messages.output_attempts(userBridge.attempts));
  },
};

module.exports = OutputView;
