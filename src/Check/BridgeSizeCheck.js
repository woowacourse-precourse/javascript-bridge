const { MissionUtils } = require("@woowacourse/mission-utils");

class BridgeSizeCheck {
  #userInput;

  constructor(userInput) {
    this.#userInput = userInput;
    this.checkInputType(userInput);
    this.checkValidLength(userInput);
  }
  
  checkInputType(userInput) {
    if (!Number.isInteger(Number(userInput))) {
      throw new Error("[ERROR] 다리의 길이는 정수여야 합니다.");
    }
  }

  checkValidLength(userInput) {
    if (Number(userInput) < 3 || Number(userInput) > 20) {
      throw new Error("[ERROR] 다리의 길이는 3 이상 20 이하여야 합니다.");
    }
  }
}

// InputCheckTest.js 에서 검증하기!
module.exports = BridgeSizeCheck;