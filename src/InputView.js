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
    let bridgeLength = 0;
    MissionUtils.Console.readLine(BRIDGE_LENGTH, (length) => {
      inputLengthCheck(length);
      bridgeLength = length;
    });

    return Number(bridgeLength);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let moveInput = '';
    MissionUtils.Console.readLine(MOVE_SPACE, (move) => {
      moveInputCheck(move);
      moveInput = move;
    });

    return moveInput;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    let gameRestartCheck = '';
    MissionUtils.Console.readLine(RE_OR_END, (decision) => {
      reOrEndCheck(decision);
      gameRestartCheck = decision;
    });

    return gameRestartCheck;
  },
};

module.exports = InputView;
