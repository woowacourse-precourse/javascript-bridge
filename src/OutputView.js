const InputView = require("./InputView");
const { Console } = require("@woowacourse/mission-utils");
const { PROGRESS, SPACE } = require("./utils/constants");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  printMap(bridge, nowStep, direction) {
    const [nowMap, retry] = OutputView.makeMap(bridge, nowStep, direction);
    Console.print(`[ ${nowMap[0].join(" | ")} ]`);
    Console.print(`[ ${nowMap[1].join(" | ")} ]`);
    if (!retry) InputView.readGameCommand();
  },

  makeMap(bridge, nowStep, direction) {
    const map = [[], []];
    const nowSpace = bridge[nowStep][SPACE[direction]];
    for (let step = 0; step < nowStep; step++) {
      map[0].push(PROGRESS[bridge[step][0]]);
      map[1].push(PROGRESS[bridge[step][1]]);
    }

    return this.plusCrurrent(map, nowSpace, direction);
  },

  plusCrurrent(map, nowSpace, direction) {
    if (nowSpace) {
      map[SPACE[direction]].push(PROGRESS.true);
      return [map, true];
    }
    map[SPACE[direction]].push("X");
    if (map[0].length > map[1].length) map[1].push(" ");
    else if (map[0].length < map[1].length) map[0].push(" ");

    return [map, false];
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
