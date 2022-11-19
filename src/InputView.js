const MissionUtils = require('@woowacourse/mission-utils');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let length;
    MissionUtils.Console.readLine(
      '다리의 길이를 입력해주세요.',
      (length_answer) => {
        length = Number(length_answer);
      }
    );
    if (length < 3 || length > 20) {
      throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }
    return length;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let U_or_D;
    MissionUtils.Console.readLine(
      '이동할 칸을 선택해주세요. (위: U, 아래: D)',
      (answer) => {
        U_or_D = answer;
      }
    );

    if (U_or_D !== 'U' || U_or_D !== 'D') {
      console.log('U_or_D', U_or_D);
      throw new Error('[ERROR] 이동할 칸은 U와 D만 입력가능합니다.');
    }
    return U_or_D;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
