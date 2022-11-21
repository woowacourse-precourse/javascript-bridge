const { Console } = require("@woowacourse/mission-utils");
const { generate } = require('./BridgeRandomNumberGenerator');
const { makeBridge } = require("./BridgeMaker");
const BridgeGame = require('./BridgeGame');
const OutputView = require('./OutputView');
const { MESSAGE, ERROR , CONSTANT } = require('./Constant');
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
// - `InputView`의 파일 경로는 변경할 수 있다.
// - `InputView`의 메서드의 인자는 변경할 수 있다.
// - 사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.
// - `InputView` 에서만 `MissionUtils`의 `Console.readLine()` 을 이용해 사용자의 입력을 받을 수 있다.
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    return Console.readLine(MESSAGE.ASK_BRIDGE_SIZE, (bridgeSize) => {
      try {
        if (isNaN(bridgeSize)) { throw new Error(); }
        if (bridgeSize < 3 || bridgeSize > 20) { throw new Error(); }
        let bridge = makeBridge(bridgeSize, generate);
        console.log(bridge); // 지워야 될 코드
        this.readMoving(bridge, CONSTANT.ZERO_INDEX, CONSTANT.FIRST_GAME);       
      } catch (error) {
        Console.print(ERROR.BRIDGE_RANGE);
        this.readBridgeSize();
      }
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge, currentIndex, totalgames) {
    Console.readLine(MESSAGE.ASK_BRIDGE_MOVE, (answer) => {
      try{
        if (answer !== "U" && answer !== "D") { throw new Error(); }
        let bridgeGame = new BridgeGame;
        let result = bridgeGame.move(answer, bridge, currentIndex);

        if (result == -1) {
          OutputView.printMap(bridge.slice(0, currentIndex+1), currentIndex, false);
          return this.readGameCommand(bridge, currentIndex, totalgames);
        }
        if (result == 0) {
          OutputView.printResult(bridge, totalgames, true);
          return Console.close();
        }
        OutputView.printMap(bridge.slice(0, currentIndex+1), currentIndex, true);
        return this.readMoving(bridge, currentIndex+1, totalgames);
      } catch (error) {
        Console.print(ERROR.MOVE_KEY);
        this.readMoving(bridge, currentIndex, totalgames);
      } 
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridge, index, totalgames) {
    Console.readLine(MESSAGE.ASK_GAME_RETRY, (answer) => {
      try {
        if (answer !== "R" && answer !== "Q") { throw new Error(); }
        let bridgeGame = new BridgeGame;
        if(!bridgeGame.retry(answer)){
          OutputView.printResult(bridge.slice(0, index+1), totalgames, false);
          return Console.close();
        }
        return this.readMoving(bridge, CONSTANT.ZERO_INDEX, totalgames+1); 
      } catch (error) {
        Console.print(ERROR.RETRY_KEY);
        this.readGameCommand(bridge, index, totalgames);
      }
    })
  },
};

module.exports = InputView;
