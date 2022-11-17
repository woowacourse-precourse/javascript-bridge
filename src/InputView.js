const BridgeSize = require("./error/BridgeSize");
const BridgeMaker = require("./BridgeMaker");

const { Console } = require("@woowacourse/mission-utils");
const { MANAGER } = require("./utils/constants");
const MoveSpace = require("./error/moveSpace");
const BridgeGame = require("./BridgeGame");

let bridge = [];
const InputView = {
  readBridgeSize() {
    Console.readLine(
      `${MANAGER.NOTICE_START}\n\n${MANAGER.ASK_BRIDGE_SIZE}\n`,
      (stage) => {
        new BridgeSize(stage);
        bridge = BridgeMaker.getSize(stage);
        InputView.readMoving(0, stage);
      }
    );
  },

  readMoving(nowStep, stage) {
    Console.readLine(`\n${MANAGER.ASK_MOVE}\n`, (direction) => {
      new MoveSpace(direction);
      const step = new BridgeGame(stage, bridge);
      step.move(nowStep, direction);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

InputView.readBridgeSize();

module.exports = InputView;
