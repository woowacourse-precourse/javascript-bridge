const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT, GAME_OUTCOME, LETTER_SIGN } = require('./Constants');

const OutputView = {
  printMap(upperMapArray, lowerMapArray) {
    Console.print(`[ ${upperMapArray.join(LETTER_SIGN.CONNECTING_LETTER)} ]`);
    Console.print(`[ ${lowerMapArray.join(LETTER_SIGN.CONNECTING_LETTER)} ]`);
  },

  printResult(upperMapArray, lowerMapArray, attemptNumber) {
    const outcome = [...upperMapArray, ...lowerMapArray].includes(LETTER_SIGN.WRONG)
      ? GAME_OUTCOME.FAIL
      : GAME_OUTCOME.SUCCESS;
    Console.print(OUTPUT.FINAL_GAME_RESULT);
    this.printMap(upperMapArray, lowerMapArray);
    Console.print(OUTPUT.GAME_SUCCESS_OR_NOT(outcome));
    Console.print(OUTPUT.TOTAL_ATTEMPT_NUMBER(attemptNumber));
  }
};

module.exports = OutputView;
