const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const BridgeMaker = require("./BridgeMaker");
const InputCheck = require('./InputCheck');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView = require('./OutputView');
const BridgeGame = require("./BridgeGame");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.', (length) => {
      const inputCheck = new InputCheck();
      inputCheck.lengthCheck(length);

    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    
  },
};
module.exports = InputView;
