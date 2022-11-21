const {Console} = require("@woowacourse/mission-utils");
const Messages = require("./Messages");

const OutputView = {

  printStart() {
    Console.print(Messages.output_start());
  },

  printMap(bridge, moved){
    const up = moved.map((el, index)=>{
      return el==='U'? (el===bridge[index]?'O':'X') :' ';
    })
    const down = moved.map((el, index)=>{
      return el==='D'? (el===bridge[index]?'O':'X') :' ';
    })
    Console.print(`[ ${up.join(' | ')} ]\n[ ${down.join(' | ')} ]`);
  },

  printResult(bridge, moved, attempts) {
    const isSuccess = JSON.stringify(bridge)===JSON.stringify(moved);

    Console.print(Messages.output_result());
    this.printMap(bridge, moved);
    Console.print(Messages.output_success(isSuccess));
    Console.print(Messages.output_attempts(attempts));
  },

};

module.exports = OutputView;
