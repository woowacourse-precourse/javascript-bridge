const { Console } = require("@woowacourse/mission-utils");
const { OUTPUT_MESSAGE } = require("../constants/OutputMessage");

const OutputView = {
  printMap(map) {
    Console.print(`[ ${map['U'].join(' | ')} ]`);
    Console.print(`[ ${map['D'].join(' | ')} ]`);
  },

  printResult(isMatch, tryingNum) {
    const result = isMatch? '성공' : '실패';
    Console.print(`${OUTPUT_MESSAGE.PRINT_FINAL_RESULT}${result}`);
    Console.print(`${OUTPUT_MESSAGE.PRINT_TRY_NUMBER}${tryingNum}`);
    Console.close();
  },

  printResultMap(){
    Console.print(OUTPUT_MESSAGE.PRINT_RESULT_MAP);
  },
  
  printError(error){
    Console.print(error);
  }
};

module.exports = OutputView;
