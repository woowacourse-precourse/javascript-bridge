const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { INPUT_MESSAGE } = require("./constant");
const Validation = require("./Validation");

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(setBridge) {
    Console.readLine(INPUT_MESSAGE.numberOfBridge, (number) => {
      Validation.checkBridgeNumber(Number(number));
      const bridge = BridgeMaker.makeBridge(
        Number(number),
        BridgeRandomNumberGenerator.generate
      );
      setBridge(bridge);
    });
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(INPUT_MESSAGE.chooseUpOrDown, (letter) => {
      Validation.checkUorD(letter);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(INPUT_MESSAGE.chooseToRetry, (letter) => {
      Validation.checkRorQ(letter);
    });
  },
};

module.exports = InputView;
