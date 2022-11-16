const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const ValidateInput = require("./Validation/ValidateInput");
const { GUIDE_MSG } = require("./constants");

const madeRandomNumber = [];

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(GUIDE_MSG.START_MSG, (answer) => {
      ValidateInput(answer);
      for (let i = 0; i < +answer; i++)
        madeRandomNumber.push(BridgeRandomNumberGenerator.generate());
      BridgeMaker.makeBridge(answer, madeRandomNumber);
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
