// InputView의 파일 경로는 변경할 수 있다.
// InputView의 메서드의 인자는 변경할 수 있다.
// 사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

const { Console } = require('@woowacourse/mission-utils');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const { isValidateBridgeSize } = require('../utils/validation');
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.\n', (length) => {
      isValidateBridgeSize(length);
      BridgeMaker.makeBridge(+length, BridgeRandomNumberGenerator.generate);
    });
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
