const { Console } = require("@woowacourse/mission-utils");

const InputCheck = {
  checkBridgeSize(inputBridgeSize) {
    this.isNumber(inputBridgeSize);
    this.isCorrectRange(inputBridgeSize);
  },

  isNumber(inputBridgeSize) {
    try {
      if (isNaN(inputBridgeSize)) {
        throw new Error("[ERROR] 다리 길이는 숫자여야 합니다.");
      }
    } catch (e) {
      Console.print(e.message);
      return true;
    }
  },

  isCorrectRange(inputBridgeSize) {
    try {
      if (inputBridgeSize < 3 || inputBridgeSize > 20) {
        throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
      }
    } catch (e) {
      Console.print(e.message);
      return true;
    }
  },

  checkMoving(inputBridgeChoice) {
    this.isCorrectBridge(inputBridgeChoice);
  },

  isCorrectBridge(inputBridgeChoice) {
    try {
      if (inputBridgeChoice !== "U" && inputBridgeChoice !== "D") {
        throw new Error("[ERROR] 이동할 칸은 U 혹은 D입니다.");
      }
    } catch (e) {
      Console.print(e.message);
      return true;
    }
  },

  checkRestart(choice) {
    this.isCorrectChoice(choice);
  },

  isCorrectChoice(choice) {
    try {
      if (choice !== "R" && choice !== "Q") {
        throw new Error("[ERROR] 재시작하려면 R, 종료하려면 Q를 입력해주세요.");
      }
    } catch (e) {
      Console.print(e.message);
      return true;
    }
  },
};

module.exports = InputCheck;
