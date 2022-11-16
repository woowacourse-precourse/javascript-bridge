const { Console } = require('@woowacourse/mission-utils');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   * @param {object} appController 게임을 총괄하는 컨트롤러
   */
  readBridgeSize(appController) {
    Console.readLine('\n다리의 길이를 입력해주세요.\n', bridgeSize => {
      appController.validateBridgeSize(bridgeSize);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   * @param {object} appController 게임을 총괄하는 컨트롤러
   */
  readMoving(appController) {
    Console.readLine(
      '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
      moving => {
        appController.validateMoving(moving);
      },
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
