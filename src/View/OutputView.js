const { Console } = require("@woowacourse/mission-utils");
const { GAME_MSG } = require("../constants/message.js");
const MapMaker = require("../MapMaker");

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
    const successOrfail = isSucceeded ? "성공" : "실패";

    Console.print("최종 게임 결과\n");
    maps.forEach((map) => {
      Console.print(map);
    });
    Console.print(`\n게임 성공 여부: ${successOrfail}`);
    Console.print(`총 시도한 횟수: ${tryCount}`);
  },

  printError(message) {
    Console.print(message);
  },
};

module.exports = OutputView;
