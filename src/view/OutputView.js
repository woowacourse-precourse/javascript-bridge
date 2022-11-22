const {Console} = require("@woowacourse/mission-utils");
const Messages = require("./Messages");

const OutputView = {

  printStart() {
    Console.print(Messages.GAMESTART());
  },

  printMap(bridge, moved){
    const up = moved.map((el, index)=>{
      return el==='U'? (el===bridge[index]?'O':'X') :' ';
    })
    const down = moved.map((el, index)=>{
      return el==='D'? (el===bridge[index]?'O':'X') :' ';
    })
    Console.print(`[ ${up.join(' | ')} ]\n[ ${down.join(' | ')} ]\n`);
  },

  printResult(bridge, moved, attempts) {
    const isSuccess = JSON.stringify(bridge)===JSON.stringify(moved);

    Console.print(Messages.GAMERESULT());
    this.printMap(bridge, moved);
    Console.print(Messages.IS_SUCCESS(isSuccess));
    Console.print(Messages.GAME_ATTEMPTS(attempts));
    
    Console.close();
  },

};

module.exports = OutputView;
