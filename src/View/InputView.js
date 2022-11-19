const MissionUtils = require("@woowacourse/mission-utils");
const { MESSAGE, ERROR, BRIDGE, BUTTON } = require("../Utils/constant");
const Random = require("../Utils/BridgeRandomNumberGenerator");
const BridgeMaker = require("../BridgeMaker");
const OutputView = require("./OutputView");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let size = 0;
    MissionUtils.Console.readLine(MESSAGE.INPUT_BRIDGE_LENGTH, (answer) => {
      size = +answer;
      try {
        this.bridgeSizeValidate(answer);
      } catch (err) {
        MissionUtils.Console.print(ERROR.BRIDGE_LENGTH);
        this.readBridgeSize();
      }
      this.bridge = BridgeMaker.makeBridge(size, Random.generate); //bridge
      this.readMoving(this.bridge, size);
    });
  },

  bridgeSizeValidate(size) {
    if (+size < BRIDGE.MIN_LENGTH || BRIDGE.MAX_LENGTH < +size) {
      throw err;
    }
    if (isNaN(+size)) {
      throw err;
    }
    return size;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridge, size) {
    let move = "";
    MissionUtils.Console.readLine(MESSAGE.INPUT_MOVE, (answer) => {
      move = answer;
      try {
        this.moveValidate(answer);
      } catch (err) {
        MissionUtils.Console.print(ERROR.MOVE);
        this.readMoving(bridge, size);
      }
      OutputView.printMap(bridge, size, move);
    });
  },

  moveValidate(move) {
    if (![BUTTON.UP, BUTTON.DOWN].includes(move)) {
      throw err;
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
