/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const MissionUtils = require("@woowacourse/mission-utils");

const InputView = {
  printGameStart(){
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다\n')
  },
  /**
   * 다리의 길이를 입력받는다.
   */

  readBridgeSize() {
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요\n',(bridgeLength)=>{
      this.readMoving(bridgeLength)
    })
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeLength) {
    MissionUtils.Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n',(userSpace)=>{
      return userSpace
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
