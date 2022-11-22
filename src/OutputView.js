const { Console } = require("@woowacourse/mission-utils");
const { MOVE_STRING, RESULT_STRING } = require("./constants");
const { OUTPUT_MESSAGE } = require("./constants/OutputMessage");

const OutputView = {
  printMap(map) {
    Console.print(`[ ${map[MOVE_STRING.UP].join(' | ')} ]`);
    Console.print(`[ ${map[MOVE_STRING.DOWN].join(' | ')} ]`);
  },

  printResult(isMatch, tryingNum, printMap) {
    Console.print(OUTPUT_MESSAGE.PRINT_RESULT_MAP);
    printMap();
    const result = isMatch? RESULT_STRING.SUCCESS : RESULT_STRING.FAIL;
    Console.print(`${OUTPUT_MESSAGE.PRINT_FINAL_RESULT}${result}`);
    Console.print(`${OUTPUT_MESSAGE.PRINT_TRY_NUMBER}${tryingNum}`);
    Console.close();
  },
  
  printMessage(message){
    Console.print(message);
  },
};

module.exports = OutputView;
