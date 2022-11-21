const {START_GAME, USER_INPUT} = require("./Messages");
const { Console } = require("@woowacourse/mission-utils");
const { generate } = require("./BridgeRandomNumberGenerator");
const { makeBridge } = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  bridgeGame: new BridgeGame(),

  readBridgeSize() {
    Console.readLine(USER_INPUT.ENTER_LENGTH, (size) => {
      const bridgeList = makeBridge(size, generate);
      console.log(bridgeList);
      const tryNum = 0;
      InputView.readMoving(bridgeList, tryNum);
    });
  },
  
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeList) {
    Console.readLine(USER_INPUT.ENTER_MOVEMENT, (upOrDown) => {
      const result = this.bridgeGame.move(bridgeList, upOrDown);
      this.repeatMoving(bridgeList, result);
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;