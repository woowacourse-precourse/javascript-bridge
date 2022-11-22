const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;
let bridgeStep = function (str) {
  if (str === "U") {
    currentBridgeUp.push(" O ");
    currentBridgeDown.push("   ");
  } else {
    currentBridgeDown.push(" O ");
    currentBridgeUp.push("   ");
  }
};

let bridgeStepFalse = function (str) {
  if (str === "U") {
    currentBridgeUp.push(" X ");
    currentBridgeDown.push("   ");
  } else {
    currentBridgeDown.push(" X ");
    currentBridgeUp.push("   ");
  }
};

let currentBridgeUp = [];
let currentBridgeDown = [];
const START = "[";
const END = "]";
const SPLIT = "|";

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(str) {
    bridgeStep(str);
    Console.print(START + currentBridgeUp.join(SPLIT) + END);
    Console.print(START + currentBridgeDown.join(SPLIT) + END);
    Console.print("");
  },

  printResultFalse(str) {
    bridgeStepFalse(str);
    Console.print(START + currentBridgeUp.join(SPLIT) + END);
    Console.print(START + currentBridgeDown.join(SPLIT) + END);
    Console.print("");
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(result, num) {
    Console.print("최종 게임 결과");
    Console.print(START + currentBridgeUp.join(SPLIT) + END);
    Console.print(START + currentBridgeDown.join(SPLIT) + END);
    Console.print(`\n게임 성공 여부: ${result}`);
    Console.print(`총 시도한 횟수: ${num}`);
    Console.close();
  },

  restart() {
    currentBridgeDown = [];
    currentBridgeUp = [];
  },
};

module.exports = OutputView;
