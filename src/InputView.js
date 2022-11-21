const MissonUtils = require('@woowacourse/mission-utils');

/**
 * 제약사항
 * 1. InputView 에서만 MissionUtils의 Console.readLine() 을 이용해 사용자의 입력을 받을 수 있다.
 * 2. 제공된 InputView 객체를 활용해 구현해야 한다.
 * 3. InputView의 파일 경로는 변경할 수 있다.
 * 4. InputView의 메서드의 인자는 변경할 수 있다.
 * 5. 사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.
 */

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {},

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
