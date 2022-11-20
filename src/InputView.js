const MissionUtils = require('@woowacourse/mission-utils');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  MINIMUM_BRIDGE_LENGTH: 3,
  MAXIMUM_BRIDGE_LENGTH: 20,
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.', (number) => {
      this.numberValidate(number);
      return number;
    });
  },
  // 다리 길이 예외처리
  numberValidate(number) {
    if (isNaN(number)) {
      throw new Error('[ERROR] 숫자를 입력해야 합니다.');
    }
    if (
      !InputView.MINIMUM_BRIDGE_LENGTH <= number &&
      number <= InputView.MAXIMUM_BRIDGE_LENGTH
    ) {
      throw new Error('[ERROR] 3 ~ 20 범위 안의 숫자를 입력해야 합니다.');
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(
      '이동할 칸을 선택해주세요. (위: U, 아래: D)',
      (alphabet) => {
        this.alphabetValidate(alphabet);
        return alphabet;
      }
    );
  },
  // 이동할 칸 예외처리
  alphabetValidate(alphabet) {
    if (typeof alphabet !== 'string') {
      throw new Error('[ERROR] 문자를 입력해야 합니다.');
    }
    if (alphabet !== 'U' || alphabet !== 'D') {
      throw new Error('[ERROR] U나 D를 입력해야 합니다.');
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
