const { Console } = require("@woowacourse/mission-utils");
const { PROMPT, WORD } = require("./Constants/Constants");

const OutputView = {
  printStart() {
    Console.print(PROMPT.START);
  },
  
  printMap(sketch) {
    const up = sketch[0].join(` ${WORD.BAR} `);
    const down = sketch[1].join(` ${WORD.BAR} `);
    Console.print(`${WORD.LEFT_BRACKET} ${up} ${WORD.RIGHT_BRACKET}`);
    Console.print(`${WORD.LEFT_BRACKET} ${down} ${WORD.RIGHT_BRACKET}${WORD.NEW_LINE}`);
  },

  printResult(map, state, countRetry) {
    Console.print(PROMPT.RESULT);
    this.printMap(map);
    state ? Console.print(PROMPT.SUCCESS) : Console.print(PROMPT.FAIL);
    Console.print(`${PROMPT.COUNT}${countRetry}`);
  },

  printErrorMessage(error) {
    Console.print(error);
  },
};

module.exports = OutputView;