const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  printMap(game) {
    Console.print(
      `[ ${game.getBridgeMap()[1].join(" | ")} ]\n` +
        `[ ${game.getBridgeMap()[0].join(" | ")} ]\n`
    );
  },

  printResult(game, result) {
    Console.print("최종 게임 결과");
    OutputView.printMap(game);
    Console.print(`게임 성공 여부: ${result}`);
    Console.print(`총 시도한 횟수: ${game.getRetryCount()}`);
  },
};

module.exports = OutputView;
