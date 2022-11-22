const { Console } = require("@woowacourse/mission-utils");
const GameStates = require("../utils/GameStates");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  print(message) {
    Console.print(message);
  },

  printMap(map) {
    for (let i = 0; i < map.length; i++) {
      Console.print(map[i].join(""));
    }
  },

  printResult(bridgeGame, map) {
    const state = bridgeGame.getGameState();
    const result = state === GameStates.GAME_SUCCESS ? "성공" : "실패";

    Console.print("최종 게임 결과");
    this.printMap(map);
    Console.print(`게임 성공 여부: ${result}`);
    Console.print(`총 시도한 횟수: ${bridgeGame.getNumberOfAttemps()}`);
  },
};

module.exports = OutputView;
