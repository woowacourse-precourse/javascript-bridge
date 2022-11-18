const { Console } = require('@woowacourse/mission-utils');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let size;
    Console.readLine('다리의 길이를 입력해주세요.', input => {
      size = input;
    });

    return size;

    // return new Promise(resolve => {
    //   Console.readLine(query, input => {
    //     const size = Number(input);
    //     resolve(size);
    //   });
    // });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let direction = '';
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)', input => {
      direction = input;
    });

    return direction;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    let command = '';
    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)', input => {
      command = input;
    });

    return command;
  },
};

module.exports = InputView;
