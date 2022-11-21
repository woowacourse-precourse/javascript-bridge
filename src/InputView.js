const MissionUtils = require("@woowacourse/mission-utils");
const Script = require("./Script");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine(`${Script.BRIDGELENGTHINPUT}\n`, (answer) => {
      const ans = BridgeMaker.makeBridge(answer, BridgeRandomNumberGenerator);
      InputView.readMoving();
      return ans;
    })
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine(`\n${Script.CHOICEBRIDGE}\n`, (answer) => {
      
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
