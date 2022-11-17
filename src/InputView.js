const MissionUtils = require("@woowacourse/mission-utils");
const Validation  = require("./Validation");
const BridgeMaker = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
// const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator"); 

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine('\n다리의 길이를 입력해주세요.\n', (size) => {
      new Validation(size).validateBridgeSize(size)      
      this.readMoving()

    });
    
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine('\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (block) => {
      return block
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    MissionUtils.Console.readLine('\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (answer) => {
      return answer
    });
  },
};

module.exports = InputView;
