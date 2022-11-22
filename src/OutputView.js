const { Console, Random } = require("@woowacourse/mission-utils");
const { MESSAGES, TEMPLATE } = require("./lib/constant");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  gameStart() {
    Console.print(MESSAGES.GAME_START);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge, nowstep, isFail) {
    [upper, lower] = this.makeOXstring(bridge, nowstep);
    if (isFail) {
      bridge[nowstep] == "U"
        ? (upper[nowstep] = " X ")
        : (lower[nowstep] = " X ");
    }
    Console.print(`[${upper.join("|")}]`);
    Console.print(`[${lower.join("|")}]\n`);
  },

  makeOXstring(bridge, nowstep) {
    sliceBridge = bridge.slice(0, nowstep + 1);
    let upper = sliceBridge.map((x) => {
      return x == "U" ? " O " : "   ";
    });
    let lower = sliceBridge.map((x) => {
      return x == "D" ? " O " : "   ";
    });
    return [upper, lower];
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(bridge, nowstep, isWin, tryCount) {
    Console.print(MESSAGES.GAME_RESULT);
    this.printMap(bridge, nowstep, !isWin);
    Console.print(TEMPLATE.ARE_YOU_WIN(isWin));
    Console.print(TEMPLATE.TRY_COUNT(tryCount));
  },
};

module.exports = OutputView;
