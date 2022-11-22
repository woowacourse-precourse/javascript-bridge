
const MissionUtils = require("@woowacourse/mission-utils");

const { Console } = MissionUtils;
/**
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
   makeMap(game) {
    const map = Array.from({ length: 2 }, () => Array(game.history.length).fill("   "));
    game.history.forEach((isSuccess, idx) => {
      const bridgePosition = game.bridge[idx] === "U"? 0 : 1;
      if (isSuccess === true) map[bridgePosition][idx] = " O ";
      else map[1 - bridgePosition][idx] = " X ";
    });
    return map;
  },

  printMap(game) {
    const map = this.makeMap(game);
    map.forEach((row) => {
      Console.print(`[${row.join("|")}]\n`);
    });
  },
  printStart() {
    Console.print("다리 건너기 게임을 시작합니다.");
  },
  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(game) {
    Console.print("최종 게임 결과\n");
    this.printMap(game);
    Console.print(`게임 성공 여부: ${game.gameOver ? '실패' : '성공'}\n총 시도한 횟수: ${game.tryCount}`)
    Console.close();
  },
};

module.exports = OutputView;
