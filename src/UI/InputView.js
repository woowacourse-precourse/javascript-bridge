const { GAME_MESSAGE } = require("../Utils/Constants");
const { BRIDGE_LENGTH } = GAME_MESSAGE;
const { readLine } = require("../Utils/MissionUtils");
const Validator = require("../Utils/Validator");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(generateBridge) {
    readLine(BRIDGE_LENGTH, (size) => {
      new Validator().bridgeLength(size);
      generateBridge(size);
    });
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
