const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { Console } = require("@woowacourse/mission-utils");
const { COMMAND } = require("./Constant");
const Exception = require("./Exception");
const OutputView = require("./OutputView");
let exception = new Exception();

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridge,bridgeGame) {
    Console.readLine(COMMAND.INPUT, (bridgeSize) => {
      exception.checkBridgeSize(bridgeSize);
      // if(exception.checkBridgeSize(bridgeSize)) return this.readBridgeSize(bridge);

      bridge.setBridge(Number(bridgeSize));
      Console.print(bridge.getBridge());
      this.readMoving(bridge,bridgeGame);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge,bridgeGame) {
    Console.readLine(COMMAND.MOVE, (space) => {
      // exception.checkSpace(space);
      
      bridgeGame.move(space,bridge);
      OutputView.printMap(bridgeGame.getUpBridgeList(),bridgeGame.getDownBridgeList());

      if(bridgeGame.isWrong(bridgeGame.getUpBridgeList(),bridgeGame.getDownBridgeList())) return this.readGameCommand(bridge,bridgeGame);
      if(bridgeGame.getCount() === bridge.getBridge().length) return OutputView.printResult("성공", bridgeGame);

      return this.readMoving(bridge,bridgeGame);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridge,bridgeGame) {
    Console.readLine(COMMAND.RESTART, (restart) => {
      if(restart === "R"){
        bridgeGame.retry(bridge);
        return this.readMoving(bridge,bridgeGame);
      }
      if(restart === "Q"){
        OutputView.printResult("실패", bridgeGame);
      }
    });
  },
};

module.exports = InputView;
