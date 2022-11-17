const MissionUtils = require("@woowacourse/mission-utils");
const { BRIDGE_LENGTH, MOVE_SPACE, RE_OR_END } = require('./constant/inputMessage');
const inputLengthCheck = require('./error/lengthInputError');
const moveInputCheck = require('./error/moveInputCheck');
const reOrEndCheck = require('./error/reOrEndCheck');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine(BRIDGE_LENGTH, (length) => {
      inputLengthCheck(length);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine(MOVE_SPACE, (move) => {
      moveInputCheck(move);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    MissionUtils.Console.readLine(RE_OR_END, (decision) => {
      reOrEndCheck(decision);
    });
  },
};

module.exports = InputView;
