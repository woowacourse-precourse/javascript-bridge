const MissionUtils = require("@woowacourse/mission-utils");
const App = require("./App");
const BridgeGame = require("./BridgeGame");
const InputView = require("./InputView");

const CheckError = {
  checkBridgeLength(input) {
    try {
      if (isNaN(input)) throw new Error("[ERROR] 숫자만 입력하세요.");
      if (input < 3 || input > 20) throw new Error("[ERROR] 3~20 숫자를 입력하세요");
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return false;
    }
    return true;
  },
};

module.exports = CheckError;
