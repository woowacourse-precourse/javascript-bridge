const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */

  printMap(step, locations) {
    const currentBridge = ["[", "["];
    if (step === 1) {
      if (locations[0] === 0) {
        currentBridge[0] += "   ]";
        currentBridge[1] += " 0 ]";
      }

      if (locations[0] === 1) {
        currentBridge[0] += " 0 ]";
        currentBridge[1] += "   ]";
      }
      console.log(currentBridge[0]);
      console.log(currentBridge[1]);
      return;
    }

    for (let i = 0; i < step; i++) {
      if (locations[i] === 0) {
        currentBridge[0] += "   |";
        currentBridge[1] += " O |";
      }
      if (locations[i] === 1) {
        currentBridge[0] += "   |";
        currentBridge[1] += " O |";
      }
    }
    currentBridge[0] = currentBridge[0].substring(
      0,
      currentBridge[0].length - 1
    );
    currentBridge[1] = currentBridge[1].substring(
      0,
      currentBridge[1].length - 1
    );

    currentBridge[0] += "]";
    currentBridge[1] += "]";

    console.log(currentBridge[0]);
    console.log(currentBridge[1]);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
