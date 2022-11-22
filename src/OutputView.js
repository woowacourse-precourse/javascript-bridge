const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE, WORD } = require("./Constants");

const OutputView = {
  printStartMessage() {
    Console.print(MESSAGE.OUTPUT.START);
  },

  printMap(map) {
    Console.print(`[ ${map.upMaps} ]`);
    Console.print(`[ ${map.downMaps} ]`);
  },

  printResult(map, isSuccess, numberOfTry) {
    Console.print(MESSAGE.OUTPUT.RESULT);
    Console.print(`[ ${map.upMaps} ]`);
    Console.print(`[ ${map.downMaps} ]`);
    Console.print(``);
    isSuccess
      ? Console.print(`${MESSAGE.OUTPUT.IS_SUCCESS}: ${WORD.SUCCESS_KR}`)
      : Console.print(`${MESSAGE.OUTPUT.IS_SUCCESS}: ${WORD.FAILURE_KR}`);
    Console.print(`${MESSAGE.OUTPUT.NUMBER_OF_TRY}: ${numberOfTry}`);
    Console.close();
  },
};

module.exports = OutputView;
