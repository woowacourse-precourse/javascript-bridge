/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.', (size) => {
      if(BridgeMaker.size < 3 || BridgeMaker.size >20 || !Number.isInteger(size)){
        throw Error('[ERROR] 다리 길이는 3 ~ 20 사이의 숫자여야 합니다. ');
      }
    });
  },

};

module.exports = InputView;

