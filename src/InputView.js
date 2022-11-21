const { Console } = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const generateRandomNumber = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");
let game = new BridgeGame();
let current = 0;
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine(`다리의 길이를 입력해주세요.\n`,(getSize)=>{
      let bridgeSize = parseInt(getSize);
      game.answer = BridgeMaker.makeBridge(getSize, generateRandomNumber);
      this.readMoving(bridgeSize);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeSize) {
    if (current >= bridgeSize) return;
    Console.readLine(`이동할 칸을 선택해주세요. (위: U, 아래: D)\n`,(getUser)=>{
      game.user =getUser;
      if (game.move(current++)) {
        return this.readMoving();
      }
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
