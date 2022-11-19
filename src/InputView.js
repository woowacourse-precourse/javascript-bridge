const MissionUtils = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 * + 파일 경로 변경 가능
 * + 메서드 인자 변경 가능
 * + 메서드 추가 가능
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(callback, message = '') {
    OutputView.printMessage('다리의 길이를 입력해주세요.');
    MissionUtils.Console.readLine(message, (answer) => {
      callback(answer);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback, message = '') {
    OutputView.printMessage('이동할 칸을 선택해주세요. (위: U, 아래: D)');
    MissionUtils.Console.readLine(message, (answer) => {
      callback(answer);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(callback, message = '') {
    OutputView.printMessage(
      '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)'
    );
    MissionUtils.Console.readLine(message, (answer) => {
      callback(answer);
    });
  },
};

module.exports = InputView;
