const { Console } = require('@woowacourse/mission-utils');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(numberInput) {
    //리팩토링시 인자 지우기, 구조 변경
    Console.readLine('다리 건너기 게임을 시작합니다.', (numberInput) => {
      if (numberInput < 3 || numberInput > 20) {
        throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
      }
      if (Number.isInteger(numberInput) === false) {
        throw new Error('[ERROR] 다리 길이는 정수이어야 합니다.');
      }
    });
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(choice) {
    //리팩토링시 인자 지우기, 구조 변경
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)', (choice) => {
      if (choice !== 'U' || choice !== 'D') {
        throw new Error('[ERROR] U 또는 D만 입력 가능합니다.');
      }
    });
  },
  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(choice) {
    //리팩토링시 인자 지우기, 구조 변경
    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)', (choice) => {
      if (choice !== 'Q' || choice !== 'R') {
        throw new Error('[ERROR] Q 또는 R만 입력 가능합니다.');
      }
    });
  },
};

module.exports = InputView;
