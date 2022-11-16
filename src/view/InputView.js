const MissionUtils = require('@woowacourse/mission-utils');
const {DEFAULTS, CONSOLELINE, ERRORLINE} = require('../utils/Constants');
const validation = require('../utils/Validation');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(){
    MissionUtils.Console.readLine(CONSOLELINE.BRIDGE_LENGTH_INPUT, (input) => {
      try{
        validation.checkBridgeSize(input);
        return this.readMoving();
      } catch(err){
        MissionUtils.Console.print(ERRORLINE.BRIDGE_LENGTH_ERROR);
        return this.readBridgeSize();
      }
    })
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    console.log('success');
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;

InputView.readBridgeSize();