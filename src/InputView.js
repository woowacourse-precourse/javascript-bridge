const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const { Console } = require("@woowacourse/mission-utils");
const { COMMAND } = require("./Constant");
const {
  checkBridgeSize,
  checkSpace,
  checkRestart
 } = require("./Exception");
const OutputView = require("./OutputView");


/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridge, bridgeGame) {
    Console.readLine(`${COMMAND.INPUT}\n`, (bridgeSize) => {
      if(checkBridgeSize(bridgeSize)) return this.readBridgeSize(bridge,bridgeGame);

      bridge.setBridge(Number(bridgeSize));
      // Console.print(bridge.getBridge());
      this.readMoving(bridge, bridgeGame);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge, bridgeGame) {
    Console.readLine(`${COMMAND.MOVE}\n`, (space) => {
      if(checkSpace(space)) return this.readMoving(bridge,bridgeGame);

      bridgeGame.move(space, bridge);
      OutputView.printMap(bridgeGame);

      if (bridgeGame.isWrong(bridgeGame.getUpBridgeList(),bridgeGame.getDownBridgeList())) return this.readGameCommand(bridge, bridgeGame);
      if (bridgeGame.getCount() === bridge.getBridge().length) return OutputView.printResult("성공", bridgeGame);

      return this.readMoving(bridge, bridgeGame);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridge, bridgeGame) {
    Console.readLine(COMMAND.RESTART, (restart) => {
      if(checkRestart(restart)) return this.readGameCommand(bridge,bridgeGame);
      if (restart === "R") {
        bridgeGame.retry(bridge);
        return this.readMoving(bridge, bridgeGame);
      }
      if (restart === "Q") OutputView.printResult("실패", bridgeGame);
    });
  },
};

module.exports = InputView;
