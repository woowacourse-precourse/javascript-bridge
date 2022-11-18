const { Console } = require("@woowacourse/mission-utils");
const { Guide } = require("./Constant");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(bridge, lastPosition) {
    const map = this.makeMapString(bridge, lastPosition);

    Console.print(`[${map[0].join("|")}]`);
    Console.print(`[${map[1].join("|")}]`);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},

  printStart() {
    Console.print(Guide.START);
  },

  makeMapString(bridge) {
    console.log(bridge);
    const map = [];

    map.push(this.makeUpMapString(bridge));
    map.push(this.makeDownMapString(bridge));

    return map;
  },

  makeUpMapString(bridge) {
    const upMap = [];

    for (let i = 0; i < bridge.length; i++) {
      if (bridge[i] === "XD") upMap.push(" X ");
      if (bridge[i] === "U") upMap.push(" O ");
      if (bridge[i] === "D" || bridge[i] === "XU") upMap.push("   ");
    }

    return upMap;
  },

  makeDownMapString(bridge) {
    const downMap = [];

    for (let i = 0; i < bridge.length; i++) {
      if (bridge[i] === "XU") downMap.push(" X ");
      if (bridge[i] === "D") downMap.push(" O ");
      if (bridge[i] === "U" || bridge[i] === "XD") downMap.push("   ");
    }

    return downMap;
  },
};

module.exports = OutputView;
