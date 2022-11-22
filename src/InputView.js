const MissionUtils = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const ServiceMessages = require('./ServiceMessages');
const Validator = require('./Validator');

const validator = new Validator();

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine(
      ServiceMessages.GET_BRIDGE_LENGTH,
      (bridgeSize) => {
        try {
          validator.checkBridgeSize(bridgeSize);
        } catch (error) {
          OutputView.printErrorMessages(error);
          this.readBridgeSize();
        }
      }
    );
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    readMoving() {
      MissionUtils.Console.readLine(
        ServiceMessages.SELECT_SPACE,
        (upOrDown) => {
          try {
            validator.checkUserMoving(upOrDown);
          } catch (error) {
            OutputView.printErrorMessages(error);
            this.readBridgeSize();
          }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
