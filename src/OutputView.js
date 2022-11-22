const { Console } = require("@woowacourse/mission-utils");
const MapMaker = require("./MapMaker");

const OutputView = {
  printStart() {
    Console.print("다리 건너기 게임을 시작합니다.");
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
