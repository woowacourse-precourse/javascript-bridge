const MissionUtils = require('@woowacourse/mission-utils');
const { Message } = require('./Config');
const Validator = require('./Validator');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {

  readInput() {
    let input;
    MissionUtils.Console.readLine(
      Message.ENTER_BRIDGE_LENGTH,
      (answer) => { input = answer; },
    );
    return input;
  },

  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    const input = InputView.readInput();
    Validator.bridgeSize(input);
    return Number(input);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    const input = InputView.readInput().trim();
    Validator.direction(input);
    return input;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    const input = InputView.readInput().trim();
    Validator.retry(input);
    return input;
  },
};

module.exports = InputView;
