const { Console } = require("@woowacourse/mission-utils");
const { GAME_MSG, RESULT_MSG } = require("../constants/message");
const MapMaker = require("../Model/MapMaker");

const OutputView = {
  printStart() {
    Console.print(GAME_MSG.START);
  },

  printMap(record) {
    const maps = MapMaker.getMapResult(record);

    maps.forEach((map) => {
      Console.print(map);
    });
  },

  printResult(record, isSucceeded, tryCount) {
    const maps = MapMaker.getMapResult(record);
    const successOrfail = isSucceeded ? RESULT_MSG.SUCCESS : RESULT_MSG.FAIL;
    Console.print(RESULT_MSG.FINAL);
    maps.forEach((map) => {
      Console.print(map);
    });
    Console.print(RESULT_MSG.SUCCESS_OR_FAIL + `${successOrfail}`);
    Console.print(RESULT_MSG.TRY_COUNT + `${tryCount}`);
  },

  printError(message) {
    Console.print(message);
  },
};

module.exports = OutputView;
