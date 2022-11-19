const { Console } = require('@woowacourse/mission-utils');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  startInteraction(callbackArr) {
    InputView.readBridgeSize.bind(this)(callbackArr);
  },
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callbackArr) {
    const [createBridge, ...rest] = callbackArr;

    Console.readLine('다리 길이를 입력해주세요.', (userInput) => {
      createBridge.call(this, Number(userInput));
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine('이동할 칸을 입력해주세요.', (userInput) => {
      this.moving = Number(userInput);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)', (userInput) => {
      this.gameCommand = Number(userInput);
    });
  },
};

module.exports = InputView;
