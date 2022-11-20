const { Console, Random } = require("@woowacourse/mission-utils");
const OutputView = require("./OutputView.js");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGame) {
    Console.print("다리 건너기 게임을 시작합니다.\n");
    Console.readLine("다리의 길이를 입력해주세요.\n", (input) => {
      bridgeGame.makeBridge(parseInt(input));
      bridgeGame.move();
    }); //예외 처리(범위, 숫자)
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (input) => {
        bridgeGame.moveInput.push(input);
        bridgeGame.validate();
      } //readGameCommand 실행 여부 판단하고
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
