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
    let failed = true;
    let input;
    while (failed) {
      ({ failed, input } = this.inputBridgeSize());
    }
    return input;
  },

  inputBridgeSize() {
    try {
      const input = this.readInput();
      Validator.bridgeSize(input);
      return { failed: false, input: Number(input) };
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return { failed: true, input: undefined };
    }
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
