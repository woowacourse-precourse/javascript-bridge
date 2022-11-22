const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

  readBridgeSize() {
    Console.print("다리 건너기 게임을 시작합니다.");
    Console.readLine("다리의 길이를 입력해주세요.\n", (length) => {
      let Bridge = BridgeMaker.makeBridge(length,BridgeRandomNumberGenerator);
      this.readMoving(Bridge);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(Bridge) {
    console.log(Bridge);
    Console.readLine("이동할 칸을 선택해주세요. (위: U, 아래: D)\n",(move) => {
      let result = new BridgeGame(Bridge,move);
      console.log(result);
      this.readGameCommand();
    });
    
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    console.log("사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.");
  },
};

module.exports = InputView;
