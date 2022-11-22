const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  // ERROR control
  bridgeLenError(bridgeLen){
    if(!(3<=bridgeLen && bridgeLen<=20)) throw "[ERROR] 다리 길이는 3~20 사이의 숫자만 입력 가능합니다.";
    if(isNaN(bridgeLen)) throw "[ERROR] 숫자만 입력하세요.";
  },
  readMovingError(input){
    if(input!=="U" && input!=="D") throw "[ERROR] U와 D중 하나만 입력 가능합니다.";
  },
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {

  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
