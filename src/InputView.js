const OutputView = require("./OutputView");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(OutputView.printRequestBridgeLength, (reply) => {
      console.log(reply);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(OutputView.printRequestUserMove, (reply) => {
      console.log(reply);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(OutputView.printRequestReplay, (reply) => {
      console.log(reply);
    });
  },
};

module.exports = InputView;
