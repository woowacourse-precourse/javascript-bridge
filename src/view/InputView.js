const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("../model/component");
const LengthError = require("../error/LengthError");
const BridgeMaker = require("../BridgeMaker");
const { generate } = require("../BridgeRandomNumberGenerator");

const InputView = {
  lengthInput: null,
  computerNum: null,
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    console.log(INPUT_MESSAGE.START_MESSAGE);
    Console.readLine(INPUT_MESSAGE.BRIDGE_MESSAGE, (input) => {
      new LengthError(input);
      this.lengthInput = input;
      this.computerNum = BridgeMaker.makeBridge(this.lengthInput, generate);
      this.readMoving();
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
