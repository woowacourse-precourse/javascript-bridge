const { Console } = require("@woowacourse/mission-utils");

const OutputView = {
  printMap(map) {
    const upperBridge = [];
    const downBridge = [];
    map.map((el) => {
      if (el.position === "U") {
        upperBridge.push(` ${el.result} `);
        downBridge.push(" \u00A0 ");
        Console.print(JSON.stringify(`[${upperBridge.join("|")}]`));
        Console.print(JSON.stringify(`[${downBridge.join("|")}]`));
        return;
      }
      if (el.position === "D") {
        upperBridge.push(" \u00A0 ");
        downBridge.push(` ${el.result} `);
        Console.print(JSON.stringify(`[${upperBridge.join("|")}]`));
        Console.print(JSON.stringify(`[${downBridge.join("|")}]`));
        return;
      }
    });
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
