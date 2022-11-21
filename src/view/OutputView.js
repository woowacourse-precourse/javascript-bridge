const Console = require("../utils/Console");
const { OUTPUT } = require("./stringsUI");

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  printStart() {
    Console.print(`${OUTPUT.START}`);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap({ upperBridge, lowerBridge }) {
    Console.print(upperBridge.join(" "));
    Console.print(lowerBridge.join(" "));
    this.printLineBreak();
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult({ resultMap, isSuccess, totalTrial }) {
    Console.print(OUTPUT.RESULT);
    Console.print(resultMap.upperBridge.join(" "));
    Console.print(resultMap.lowerBridge.join(" "));
    Console.print(OUTPUT.printSuccessResult(isSuccess));
    Console.print(OUTPUT.printTrialResult(totalTrial));

    Console.close();
  },

  printLineBreak() {
    Console.print("");
  },

  printError(errorMsg) {
    Console.print(errorMsg);
  },
};

module.exports = OutputView;
