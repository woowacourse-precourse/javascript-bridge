const MissionUtils = require("@woowacourse/mission-utils");

const ValidCheck = require("../utils/ValidCheck");
const { INPUT_MESSAGE, VALID_FLAG } = require("../utils/Constant");

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let bridgeSize = undefined;
    let flagValid = VALID_FLAG.DO; // 입력을 받는 플래그

    while (flagValid === VALID_FLAG.DO) {
      bridgeSize = InputView.inputSize();
      flagValid = ValidCheck.validateBridgeSize(bridgeSize);
      ValidCheck.raiseError(flagValid);
    }

    return bridgeSize;
  },

  inputSize() {
    let bridgeSize = undefined;

    MissionUtils.Console.readLine(
      INPUT_MESSAGE.BRIDGE_SIZE,
      answer => bridgeSize = answer
    );

    return bridgeSize;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let moving = undefined;
    let flagValid = VALID_FLAG.DO; // 입력을 받는 플래그

    while (flagValid === VALID_FLAG.DO) {
      moving = InputView.inputMoving();
      flagValid = ValidCheck.validateMoving(moving);
      ValidCheck.raiseError(flagValid);
    }

    return moving;
  },

  inputMoving() {
    let moving = undefined;

    MissionUtils.Console.readLine(
      INPUT_MESSAGE.MOVING,
      answer => moving = answer
    )

    return moving;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    let readGameCommand = undefined;
    let flagValid = VALID_FLAG.DO; // 입력을 받는 플래그

    while (flagValid === VALID_FLAG.DO) {
      readGameCommand = InputView.inputGameCommand();
      flagValid = ValidCheck.validateGameCommand(readGameCommand);
      ValidCheck.raiseError(flagValid);
    }

    return readGameCommand;
  },

  inputGameCommand() {
    let readGameCommand = undefined;
    
    MissionUtils.Console.readLine(
      INPUT_MESSAGE.RESTART,
      answer => readGameCommand = answer
    );

    return readGameCommand;
  }
};

module.exports = InputView;
