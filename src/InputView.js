/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

const MissionUtils = require("@woowacourse/mission-utils");
const Checking = require("./Checking")

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let BRIDGE_LENGTH = 0
    MissionUtils.Console.readLine("",(bridgeLength) => {
      if(Checking.bridgeNum(bridgeLength) === 'ERROR') { this.readBridgeSize() }
      if(Checking.bridgeNumCheck(bridgeLength) === 'ERROR') {this.readBridgeSize()}
      BRIDGE_LENGTH = bridgeLength
    })
    return BRIDGE_LENGTH
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let USER_MOVE = ''
    MissionUtils.Console.readLine("",(userMove) => {
      if(Checking.userMoveCheck(userMove) === "ERROR") {this.readMoving()}
      USER_MOVE = userMove
    })
    return USER_MOVE
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    let USER_CHOICE = ''
    MissionUtils.Console.readLine("",(userChoice) => {
      if(Checking.userRetryCheck(userChoice) === "ERROR") {this.readMoving()}
      USER_CHOICE = userChoice
    })
    return USER_CHOICE
  },
};

module.exports = InputView;
