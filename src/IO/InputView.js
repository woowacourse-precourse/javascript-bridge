const MissionUtils = require('@woowacourse/mission-utils');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

/*
 * InputView의 파일 경로는 변경할 수 있다.
 * InputView의 메서드의 인자는 변경할 수 있다.
 * 사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.
 */

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(validateBridgeSize) {
    const GET_BRIDGE_LENGTH = '다리의 길이를 입력해주세요.\n';
    MissionUtils.Console.readLine(GET_BRIDGE_LENGTH, validateBridgeSize);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(validateBridgeMove) {
    const SELECT_CELL = '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n';
    MissionUtils.Console.readLine(SELECT_CELL, validateBridgeMove);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(validateRetryInput) {
    const DO_YOU_WANNA_RETRY = '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n';
    MissionUtils.Console.print(DO_YOU_WANNA_RETRY, validateRetryInput);
  },
};

module.exports = InputView;
