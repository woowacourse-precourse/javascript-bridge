const MissionUtils = require("@woowacourse/mission-utils");
const InputMessage = require("./utils/const/inputViewMessage");
const VaildationCheck = require("./VaildationCheck");
const varTypeConst = require("./utils/const/varType");
const ErrorWithPrifix = require("./CustomError");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  validate: new VaildationCheck(),
  inputContainer: null,
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    this.inputHelper(InputMessage.readBridgeSize);
    const bridgeSize = Number(this.inputContainer);
    this.validate.isNumber(bridgeSize);
    this.validate.isNumberIntheRange([3, 20], bridgeSize);
    return bridgeSize;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    return true;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    return true;
  },

  readBridgeSizeValidate() {},

  inputHelper(message) {
    MissionUtils.Console.readLine(message, (input) => {
      this.inputContainer = input;
    });
  },
};

module.exports = InputView;
