const BridgeSize = require("./error/BridgeSize");
const BridgeMaker = require("./BridgeMaker");

const { Console } = require("@woowacourse/mission-utils");
const { MANAGER } = require("./utils/constants");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const MoveSpace = require("./error/moveSpace");
const number = BridgeRandomNumberGenerator.generate();

const InputView = {
  readBridgeSize() {
    Console.readLine(
      `${MANAGER.NOTICE_START}\n\n${MANAGER.ASK_BRIDGE_SIZE}\n`,
      (input) => {
        new BridgeSize(input);
        BridgeMaker.getSize(input);
        InputView.readMoving();
      }
    );
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    Console.readLine(`\n${MANAGER.ASK_MOVE}\n`, (input) => {
      new MoveSpace(input);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

InputView.readBridgeSize();

module.exports = InputView;
