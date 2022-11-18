/*
 제공된 InputView 객체를 활용해 구현해야 한다.
 InputView의 `파일 경로`는 변경할 수 있다. 🙆‍♂️
 InputView의 메서드의 `인자`는 변경할 수 있다. 🙆‍♂️
 사용자 값 입력을 위해 필요한 `메서드`를 추가할 수 있다. 🙆‍♂️
 */
const { Console } = require('@woowacourse/mission-utils');
const { READ_BRIDGE_SIZE } = require('./utils/constants');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(READ_BRIDGE_SIZE, () => {});
  },

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
