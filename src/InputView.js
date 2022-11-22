const { Console } = require("@woowacourse/mission-utils");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(input) {
    Console.print('다리 건너기 게임을 시작합니다.\n');
    Console.readLine('다리의 길이를 입력해주세요.\n', size => {
      if (isNaN(Number(size))) {
        Console.print('[ERROR] 3-20 사이의 숫자를 입력해주세요');
        Console.close();
      }
      input.createUserBridge(Number(size));
    });
  },


 
};

module.exports = InputView;