const BridgeSize = require("./error/BridgeSize");
const MoveSpace = require("./error/moveSpace");
const Controller = require("./Controller");
const GameCommand = require("./error/GameCommand");

const { Console } = require("@woowacourse/mission-utils");
const { MANAGER } = require("./utils/constants");

const controller = new Controller();

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
      if (!isSafe) this.readGameCommand(size);
      else if (nowStep < size) this.readMoving(nowStep + 1, size);
    });
  },

  readGameCommand(size) {
    Console.readLine(`\n${MANAGER.ASK_RETRY}\n`, (answer) => {
      new GameCommand(answer);
      const result = controller.giveAnswer(answer);
      if (result) this.readMoving(0, size);
    });
  },
};

InputView.readBridgeSize();

module.exports = InputView;
