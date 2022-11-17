const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { INPUT_MESSAGE } = require("./constant");
const OutputView = require("./OutputView");
const Validation = require("./Validation");

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(setBridge, move) {
    Console.readLine(INPUT_MESSAGE.numberOfBridge, (number) => {
      Validation.checkBridgeNumber(Number(number));
      const bridge = BridgeMaker.makeBridge(
        Number(number),
        BridgeRandomNumberGenerator.generate
      );
      setBridge(bridge);
      this.readMoving(move);
    });
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(move) {
    Console.readLine(INPUT_MESSAGE.chooseUpOrDown, (letter) => {
      Validation.checkUorD(letter);
      const { result, map } = move(letter);
      OutputView.printMap(map);
      if (result) {
        this.readMoving(move);
      } else {
        this.readGameCommand();
      }
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
