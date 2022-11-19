const MissionUtils = require("@woowacourse/mission-utils");
const Validate = require("./Validate");
const { INPUT_MESSAGE } = require("./Utils");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine(INPUT_MESSAGE.INPUT_BRIDGE_LENGTH, (size) => {
      return Validate.validateBridgeLength(size);
    })
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine(INPUT_MESSAGE.CHOICE_SPACE_TO_MOVE, (move) => {
      return Validate.validateMoving(move);
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
