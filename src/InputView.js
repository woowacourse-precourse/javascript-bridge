const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.", (size) => {
      const bridge = new BridgeGame(
        BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate)
      );
      InputView.readMoving(bridge, Number(size), 0, 1);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  // step: 0,

  readMoving(bridge, size, step, round) {
    Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D)", (answer) => {
      if (bridge.checkInputIsCorrect(answer, step)) {
        if (!bridge.move(step, size)) {
          this.readMoving(bridge, size, step + 1, round);
        }
        OutputView.printResult("성공", round, step, bridge);
        return;
      }
      OutputView.printWrongMap(step, bridge);
      this.readGameCommand(bridge, size, step, round);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridge, size, step, round) {
    Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (answer) => {
        if (answer === "Q") {
          OutputView.printResult("실패", round, step, bridge);
          return;
        }
        if (answer === "R") {
          this.readMoving(bridge, size, step, round + 1);
        }
      }
    );
  },
};

module.exports = InputView;
