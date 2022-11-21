const { Console } = require("@woowacourse/mission-utils");
const { BridgeSize, MoveInput } = require("./Utils");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");

const InputView = {
  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.\n", (inputSize) => {
      const bridgeSize = new BridgeSize(inputSize);
      const size = bridgeSize.makeStringToNumber();

      const generater = BridgeRandomNumberGenerator.generate;
      const bridgeShape = BridgeMaker.makeBridge(size, generater);

      this.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (move) => new MoveInput(move)
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
