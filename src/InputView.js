const { Console } = require('@woowacourse/mission-utils');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(createBridge) {
    Console.readLine('다리의 길이를 입력해주세요.', (answer) => {
      try {
        this.readBridgeSizeException(answer, createBridge);
      } catch (err) {
        Console.print(err);
        this.readBridgeSize(createBridge);
      }
    });
  },

  readBridgeSizeException(number, createBridge) {
    if (number < 3 || number > 21)
      throw '[ERROR] 3 이상 20 이하의 숫자를 입력해주세요.';
    else createBridge(number);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(answerArr, move) {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)', (answer) => {
      try {
        this.readMovingException(answer, answerArr, move);
      } catch (err) {
        console.log(err);
        this.readMoving(answerArr, move);
      }
    });
  },

  readMovingException(letter, answerArr, move) {
    const LimitedMovement = /[UD]/;
    if (!LimitedMovement.test(letter))
      throw '[ERROR] 대문자 U 와 D 를 입력해주세요.';
    else move(letter, answerArr);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};
module.exports = InputView;
