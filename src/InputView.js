const MissionUtils = require("@woowacourse/mission-utils");
const InputMessage = require("./utils/const/inputViewMessage");
const VaildationCheck = require("./VaildationCheck");
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
    const bridgeSize = Number(this.inputHelper(InputMessage.readBridgeSize));
    this.validate.isNumber(bridgeSize);
    this.validate.isNumberIntheRange([3, 20], bridgeSize);
    return bridgeSize;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    const move = this.inputHelper(InputMessage.readMoving);
    this.validate.isStringIntheList(["U", "D"], move);
    return move;
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    const command = this.inputHelper(InputMessage.readGamdCommand);
    this.validate.isStringIntheList(["R", "Q"], command);
    return command;
  },

  inputHelper(message) {
    MissionUtils.Console.readLine(message, (input) => {
      this.inputContainer = input;
    });
    const buffer = this.inputContainer;
    this.inputContainer = null;
    return buffer;
  },
};

module.exports = InputView;
