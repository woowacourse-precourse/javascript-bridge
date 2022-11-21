const { USER_INPUT, RETRY } = require("./Messages");
const { Console } = require("@woowacourse/mission-utils");
const { generate } = require("./BridgeRandomNumberGenerator");
const { makeBridge } = require("./BridgeMaker");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");
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
      InputView.readMoving(bridgeList);
      
      // this.readMoving(this.bridgeGame);
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
  repeatMoving(bridgeList, result) {
    const [upList, downList, tryNum] = result;
    // console.log(upList[upList.length-1], downList[downList.length-1]);
    const upAndDown = ['[ ' + upList.join(' | ') + ' ]', '[ ' + downList.join(' | ') + ' ]'];
    OutputView.printMap(upAndDown);
    
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;