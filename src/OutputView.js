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

  printError(message) {
    Console.print(message);
  },
};

module.exports = OutputView;
