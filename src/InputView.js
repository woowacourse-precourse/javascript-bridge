const { Console } = require("@woowacourse/mission-utils");
const OutputView = require("./OutputView");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

  // readBridgeSize() {
  //   Console.readLine("다리의 길이를 입력해주세요.", (size) => {
  //     const bridge = new BridgeGame(
  //       BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate)
  //     );
  //     InputView.readMoving(bridge, Number(size), 0, 1);
  //   });
  // },

  readBridgeSize(callBack) {
    Console.readLine("다리의 길이를 입력해주세요.", callBack);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  // step: 0,

  // readMoving(bridge, size, step, round) {
  // Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D)", (answer) => {
  //   if (bridge.checkInputIsCorrect(answer, step)) {
  //     OutputView.printMap(step, bridge.getBridge());
  //     if (bridge.checkIsLastStep(step, size - 1)) {
  //       OutputView.printResult("성공", round, step, bridge.getBridge());
  //       return;
  //     }
  //     this.readMoving(bridge, size, step + 1, round);
  //     return;
  //   }
  //   OutputView.printWrongMap(step, bridge.getBridge());
  //   this.readGameCommand(bridge, size, step, round);
  // });
  // bridge.move();

  // },

  readMoving(callBack) {
    Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D)", callBack);
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  //   readGameCommand(bridge, size, step, round) {
  //     Console.readLine(
  //       "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
  //       (answer) => {
  //         if (answer === "Q") {
  //           OutputView.printResult("실패", round, step, bridge.getBridge());
  //           return;
  //         }
  //         if (answer === "R") {
  //           this.readMoving(bridge, size, 0, round + 1);
  //         }
  //       }
  //     );
  //   },

  // readGameCommand(callBack) {
  //   Console.readLine(
  //     "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
  //     callBack
  //   );
  // },
};

module.exports = InputView;
