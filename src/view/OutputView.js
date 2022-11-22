const { Console } = require("@woowacourse/mission-utils");
const InfoMessages = require("../constants/InfoMessages.js");
const Values = require("../constants/Values.js");

const OutputView = {
  printGameStart() {
    Console.print(InfoMessages.OPENING_REMARKS);
  },

  printErrorMessage(error) {
    Console.print(error.message);
  },

  printMap(stepObj) {
    const upperPart = stepObj.upperPart.join(" | ");
    const lowerPart = stepObj.lowerPart.join(" | ");
    Console.print(`[ ${upperPart} ]`);
    Console.print(`[ ${lowerPart} ]`);
    Console.print(Values.BLANK);
  },

  printResult(stepObj, isSuccess, numOfTrials) {
    Console.print(InfoMessages.GAME_RESULTS);
    this.printMap(stepObj);
    this.showSuccessOrFailure(isSuccess);
    Console.print(InfoMessages.TOTAL_ATTEMPTS + numOfTrials);
    Console.close();
  },

  showSuccessOrFailure(isSuccess) {
    if (isSuccess) return Console.print(InfoMessages.GAME_SUCCESS);
    return Console.print(InfoMessages.GAME_FAILED);
  },
};

module.exports = OutputView;
