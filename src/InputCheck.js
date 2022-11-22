const { Console } = require("@woowacourse/mission-utils");

const InputCheck = {
  checkBridgeSize(inputBridgeSize) {
    const number = this.isNumber(inputBridgeSize);
    const range = this.isCorrectRange(inputBridgeSize);
    const correctSize = number || range;
    return correctSize;
  },

  isNumber(inputBridgeSize) {
    const correctNumber = isNaN(inputBridgeSize);
    try {
      if (correctNumber) {
        throw new Error("[ERROR] 다리 길이는 숫자여야 합니다.");
      }
    } catch (e) {
      Console.print(e.message);
    }
    return correctNumber;
  },

  isCorrectRange(inputBridgeSize) {
    const correctRange = inputBridgeSize < 3 || inputBridgeSize > 20;
    try {
      if (correctRange) {
        throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
      }
    } catch (e) {
      Console.print(e.message);
    }
    return correctRange;
  },

  checkMoving(inputBridgeChoice) {
    const choice = this.isCorrectBridge(inputBridgeChoice);
    return choice;
  },

  isCorrectBridge(inputBridgeChoice) {
    const correctChoice =
      inputBridgeChoice !== "U" && inputBridgeChoice !== "D";
    try {
      if (correctChoice) {
        throw new Error("[ERROR] 이동할 칸은 U 혹은 D입니다.");
      }
    } catch (e) {
      Console.print(e.message);
    }
    return correctChoice;
  },

  checkRestart(choice) {
    const choiceContinue = this.isCorrectChoice(choice);
    return choiceContinue;
  },

  isCorrectChoice(choice) {
    const correctChoiceContinue = choice !== "R" && choice !== "Q";
    try {
      if (correctChoiceContinue) {
        throw new Error("[ERROR] 재시작하려면 R, 종료하려면 Q를 입력해주세요.");
      }
    } catch (e) {
      Console.print(e.message);
    }
    return correctChoiceContinue;
  },
};

module.exports = InputCheck;
