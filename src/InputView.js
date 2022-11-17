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
  readBridgeSize(setBridge, move, retry) {
    this.setMethods(setBridge, move, retry);
    Console.readLine(INPUT_MESSAGE.numberOfBridge, (number) => {
      Validation.checkBridgeNumber(Number(number));
      const bridge = BridgeMaker.makeBridge(
        Number(number),
        BridgeRandomNumberGenerator.generate
      );
      this.setBridge(bridge);
      this.readMoving();
    });
  },

  setMethods(setBridge, move, retry) {
    this.setBridge = setBridge;
    this.move = move;
    this.retry = retry;
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(INPUT_MESSAGE.chooseUpOrDown, (letter) => {
      Validation.checkUorD(letter);
      const { result, map } = this.move(letter);
      OutputView.printMap(map);
      if (result) {
        this.readMoving();
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
