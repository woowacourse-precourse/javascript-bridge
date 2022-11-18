const { Console } = require("@woowacourse/mission-utils");
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");
const bridgeGame = new BridgeGame;
const OutputView = require("./OutputView");
const userBridgeCorrect = bridgeGame.userPickedUpOrDown;

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(){
    Console.readLine("다리의 길이를 입력해주세요" , (num) => {
      if(userBridgeCorrect[0].includes("X") || userBridgeCorrect.includes("X")){
        this.readGameCommand();
      }
      this.createBridge = makeBridge(num, generate);
      this.readMoving();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D", (selectUpOrDown) => {
      bridgeGame.move(this.createBridge, selectUpOrDown);
      this.readMoving();
      OutputView.printResult(`[ ${userBridgeCorrect[0].join(" | ")} ]`, `[ ${userBridgeCorrect[1].join(" | ")} ]`, bridgeGame.attemptCount);
      this.readGameCommand();
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine("게임을 다시 시도할지 여부를 입력해주세요. (재시도:R, 종료:Q)", (Value) => {
    })
  },
};

module.exports = InputView;