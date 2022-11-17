const MissionUtils = require("@woowacourse/mission-utils");
const InputView = require("./InputView");

const CheckError = {
  checkBridgeLength(input) {
    try {
      if (isNaN(input)) throw new Error("[ERROR] 숫자만 입력하세요.");
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  },
};

module.exports = CheckError;
