const BridgeSize = require("./error/BridgeSize");
const MoveSpace = require("./error/moveSpace");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");

const { Console } = require("@woowacourse/mission-utils");
const { MANAGER } = require("./utils/constants");
const Controller = require("./Controller");

const controller = new Controller();
let bridge = [];

const InputView = {
  readBridgeSize() {
    Console.readLine(
      `${MANAGER.NOTICE_START}\n\n${MANAGER.ASK_BRIDGE_SIZE}\n`,
      (size) => {
        new BridgeSize(size);
        controller.giveSize(size);
        this.readMoving(0, size);
      }
    );
  },

  readMoving(nowStep, size) {
    Console.readLine(`\n${MANAGER.ASK_MOVE}\n`, (moving) => {
      new MoveSpace(moving);
      const isSafe = controller.giveMoving(nowStep, moving);
      if (!isSafe) this.readGameCommand();
      else if (nowStep < size) this.readMoving(nowStep + 1, size);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    Console.readLine(`\n${MANAGER.ASK_RETRY}\n`, (answer) => {
      new MoveSpace(answer);
    });
  },
};

InputView.readBridgeSize();

module.exports = InputView;
