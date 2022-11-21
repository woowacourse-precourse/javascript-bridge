const { Console } = require("@woowacourse/mission-utils");
const { OUTPUT_MESSAGE } = require("./constants/OutputMessage");

const OutputView = {
  printMap(upMap,downMap) {
    Console.print(`[ ${upMap.join(' | ')} ]`);
    Console.print(`[ ${downMap.join(' | ')} ]`);
  },

  printResult(isMatch, tryingNum) {
    const result = isMatch? '성공' : '실패';
    Console.print(`${OUTPUT_MESSAGE.PRINT_FINAL_RESULT}${result}`);
    Console.print(`${OUTPUT_MESSAGE.PRINT_TRY_NUMBER}${tryingNum}`);
    Console.close();
  },

  printResultMap(){
    Console.print(OUTPUT_MESSAGE.PRINT_RESULT_MAP);
  }
};

module.exports = OutputView;
