const { Console } = require("@woowacourse/mission-utils");
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

  printMap(step, bridge) {
    const currentBridge = ["[", "["];
    if (step === 0) {
      if (bridge[0] === "D") {
        currentBridge[0] += "   ]";
        currentBridge[1] += " 0 ]";
      }

      if (bridge[0] === "U") {
        currentBridge[0] += " 0 ]";
        currentBridge[1] += "   ]";
      }
      Console.print(currentBridge[0]);
      Console.print(currentBridge[1]);
      return;
    }

    for (let i = 0; i < step + 1; i++) {
      if (bridge[i] === "D") {
        currentBridge[0] += "   |";
        currentBridge[1] += " O |";
      }
      if (bridge[i] === "U") {
        currentBridge[0] += " O |";
        currentBridge[1] += "   |";
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

    Console.print(currentBridge[0]);
    Console.print(currentBridge[1]);
  },

  printWrongMap(step, bridge) {
    const currentBridge = ["[", "["];
    if (step === 0) {
      if (bridge[0] === "D") {
        currentBridge[0] += " X ]";
        currentBridge[1] += "   ]";
      }

      if (bridge[0] === "U") {
        currentBridge[0] += "   ]";
        currentBridge[1] += " X ]";
      }
      Console.print(currentBridge[0]);
      Console.print(currentBridge[1]);
      return;
    }

    for (let i = 0; i < step + 1; i++) {
      if (i === step) {
        if (bridge[i] === "D") {
          currentBridge[0] += " X |";
          currentBridge[1] += "   |";
        }
        if (bridge[i] === "U") {
          currentBridge[0] += "   |";
          currentBridge[1] += " X |";
        }
        break;
      }
      if (bridge[i] === "D") {
        currentBridge[0] += "   |";
        currentBridge[1] += " O |";
      }
      if (bridge[i] === "U") {
        currentBridge[0] += " O |";
        currentBridge[1] += "   |";
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

    Console.print(currentBridge[0]);
    Console.print(currentBridge[1]);

    // InputView.readBridgeSize();
    // InputView.readGameCommand();
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(state, round, step, bridge) {
    Console.print("최종 게임 결과");
    if (state === "성공") {
      this.printMap(step, bridge);
    }
    if (state === "실패") {
      this.printWrongMap(step, bridge);
    }

    Console.print(`게임 성공 여부: ${state}`);
    Console.print(`총 시도한 횟수: ${round}`);
  },
};

module.exports = OutputView;
