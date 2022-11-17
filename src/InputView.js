const MissionUtils = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.\n', (size) => {
      const brige = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
      this.readMoving(brige);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(brige) {
    MissionUtils.Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래:D)\n', (moving) => {
      MissionUtils.Console.print(brige);
      MissionUtils.Console.print(moving);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
