const { Console } = require("@woowacourse/mission-utils");
const InputCheck = require("./utils/validates");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const OutputView = require('./OutputView');
const BridgeGame = require("./BridgeGame");
const { INPUT_MESSAGES, OUTPUT_MESSAGES } = require("./utils/constants");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

function generateRandomNumber() {
  return BridgeRandomNumberGenerator.generate();
}

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(INPUT_MESSAGES.BRIDGE_LENGTH, (length) => {
      const inputCheck = new InputCheck();
      inputCheck.lengthCheck(length);
      const bridge = BridgeMaker.makeBridge(length, generateRandomNumber);
      this.readMoving(bridge, [], 1);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge, previous, attempt) {
    let steps = previous;
    Console.readLine(INPUT_MESSAGES.MOVE_SQUARE, (step) => {
      const inputCheck = new InputCheck();
      inputCheck.stepCheck(step);
      steps += step;
      const bridgeGame = new BridgeGame();
      if (bridgeGame.move(bridge, steps)) {
        OutputView.printMap(bridge, steps);
        if (steps.length != bridge.length) {
          this.readMoving(bridge, steps, attempt);
        } else {
          Console.print(OUTPUT_MESSAGES.RESULT);
          OutputView.printMap(bridge, steps);
          OutputView.printResult(true, attempt);
          Console.close();
        }
      } else {
        OutputView.printMap(bridge, steps);
        this.readGameCommand(bridge, attempt);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() { },
};

module.exports = InputView;
