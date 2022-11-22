const MissionUtils = require("@woowacourse/mission-utils");

const ValidCheck = require("./ValidCheck");
const { VALID_CHECK_DO } = require("./GameCommands");

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let bridgeSize = undefined;
    let flagValid = VALID_CHECK_DO; // 입력을 받는 플래그

    while (flagValid === VALID_CHECK_DO) {
      bridgeSize = InputView.inputSize();
      flagValid = ValidCheck.validateBridgeSize(bridgeSize);
      ValidCheck.raiseError(flagValid);
    }

    return Number(bridgeSize);
  },

  inputSize() {
    let bridgeSize = undefined;

    MissionUtils.Console.readLine("다리의 길이를 입력해주세요. \n >",
      answer => bridgeSize = answer
    );

    return bridgeSize;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    let moving = undefined;
    let flagValid = VALID_CHECK_DO; // 입력을 받는 플래그

    while (flagValid === VALID_CHECK_DO) {
      moving = InputView.inputMoving();
      flagValid = ValidCheck.validateMoving(moving);
      ValidCheck.raiseError(flagValid);
    }

    return moving;
  },

  inputMoving() {
    let moving = undefined;

    MissionUtils.Console.readLine(
      "이동할 칸을 선택해주세요 (위: U, 아래: D)\n >",
      answer => moving = answer
    )

    return moving;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    let readGameCommand = undefined;
    let flagValid = VALID_CHECK_DO; // 입력을 받는 플래그

    while (flagValid === VALID_CHECK_DO) {
      readGameCommand = InputView.inputGameCommand();
      flagValid = ValidCheck.validateGameCommand(readGameCommand);
      ValidCheck.raiseError(flagValid);
    }

    return readGameCommand;
  },

  inputGameCommand() {
    let readGameCommand = undefined;
    
    MissionUtils.Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n >",
      answer => readGameCommand = answer
    );

    return readGameCommand;
  }
};

module.exports = InputView;
