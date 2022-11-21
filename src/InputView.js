const { Console } = require("@woowacourse/mission-utils");
const OutputView = require("./OutputView");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGame) {
    Console.readLine("다리의 길이를 입력해주세요.\n", (bridgeSize) => {
      bridgeGame.setBridgeSize(bridgeSize);
      bridgeGame.setBridge();
      bridgeGame.increaseTrial();
      this.readMoving(bridgeGame);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D)\n", (userChoice) => {
      bridgeGame.move(userChoice);
      const currBridge = bridgeGame.getCurrBridge();
      OutputView.printMap(currBridge);
      const failFlag = bridgeGame.getFailFlag();
      if(failFlag) {
        this.readGameCommand(bridgeGame);
      }
      if(!failFlag) {
        this.readMoving(bridgeGame);
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame) {
    Console.readLine("게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q\n", (gameRestart) => {
      if(gameRestart === "R") {
        bridgeGame.retry();
        this.readMoving(bridgeGame);
      }
      if(gameRestart === "Q") {
        const trial = bridgeGame.getTrial();
        const currBridge = bridgeGame.getCurrBridge();
        OutputView.printResult(currBridge, false, trial);
        Console.close();
      }
    });
  },
};

module.exports = InputView;
