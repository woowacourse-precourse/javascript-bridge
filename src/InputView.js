const Io = require("./Io");
const Validation = require('./Validation');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
      Io.input('다리의 길이를 입력해주세요.', (input) => {
        Validation.validatePositiveInteger(input);
        const SIZE = Number(input);
        const GENERATE_RANDOM_NUMBER = BridgeRandomNumberGenerator.generate;
        const BRIDGE_STATUS = BridgeMaker.makeBridge(SIZE, GENERATE_RANDOM_NUMBER);
        this.readMoving(BRIDGE_STATUS);
      });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(BRIDGE_STATUS) {
    Io.input('이동할 칸을 선택해주세요. (위: U, 아래: D)', (input) => {
      const USER_CHIOCE = input;
      console.log(USER_CHIOCE);
      console.log(BRIDGE_STATUS);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
