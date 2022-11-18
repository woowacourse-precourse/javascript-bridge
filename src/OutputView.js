const { Console } = require("@woowacourse/mission-utils");
const { PASS, FAIL, RESULT } = require("./utils/constants");

const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  printMap(bridge, nowStep, isSafe) {
    const nowMap = OutputView.makeMap(bridge, nowStep, isSafe);
    Console.print(`[ ${nowMap[0].join(" | ")} ]`);
    Console.print(`[ ${nowMap[1].join(" | ")} ]`);
    return nowMap;
  },

  makeMap(bridge, nowStep, isSafe) {
    const [UP, DOWN] = this.checkCrurrent(bridge, nowStep, isSafe);
    const map = [[], []];
    for (let preStep = 0; preStep < nowStep; preStep++) {
      map[0].push(PASS[bridge[preStep][0]]);
      map[1].push(PASS[bridge[preStep][1]]);
    }
    map[0].push(UP);
    map[1].push(DOWN);
    return map;
  },

  checkCrurrent(bridge, nowStep, isSafe) {
    if (isSafe) return [PASS[bridge[nowStep][0]], PASS[bridge[nowStep][1]]];
    return [FAIL[bridge[nowStep][0]], FAIL[bridge[nowStep][1]]];
  },

  printResult(nowMap, retryCnt, isSuccess) {
    Console.print(`\n종 게임 결과`);
    Console.print(`[ ${nowMap[0].join(" | ")} ]`);
    Console.print(`[ ${nowMap[1].join(" | ")} ]`);
    Console.print(`\n게임 성공 여부: ${RESULT[isSuccess]}`);
    Console.print(`총 시도한 횟수: ${retryCnt}`);
    Console.close();
  },
};

module.exports = OutputView;
