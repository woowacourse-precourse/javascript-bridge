const MissionUtils = require('@woowacourse/mission-utils');
const {
  MESSAGE, ERROR, BRIDGE, BUTTON,
} = require('../Utils/constant');
const Random = require('../Utils/BridgeRandomNumberGenerator');
const BridgeMaker = require('../BridgeMaker');
const OutputView = require('./OutputView');

const InputView = {
  size: 0,

  readBridgeSize() {
    MissionUtils.Console.readLine(MESSAGE.INPUT_BRIDGE_LENGTH, (answer) => {
      this.size = +answer;
      try {
        this.bridgeSizeValidate(answer);
      } catch {
        MissionUtils.Console.print(ERROR.BRIDGE_LENGTH);
        this.readBridgeSize();
      }
      this.bridge = BridgeMaker.makeBridge(this.size, Random.generate);
      this.readMoving(this.bridge, this.size);
    });
  },

  bridgeSizeValidate(size) {
    if (+size < BRIDGE.MIN_LENGTH || BRIDGE.MAX_LENGTH < +size) {
      throw ERROR.BRIDGE_LENGTH;
    }
    if (Number.isNaN(+size)) {
      throw ERROR.BRIDGE_LENGTH;
    }
    return size;
  },

  readMoving(bridge, size) {
    MissionUtils.Console.readLine(MESSAGE.INPUT_MOVE, (answer) => {
      const move = answer;
      try {
        this.moveValidate(answer);
        OutputView.printMap(bridge, size, move);
      } catch {
        MissionUtils.Console.print(ERROR.MOVE);
        this.readMoving(bridge, size);
      }
    });
  },

  moveValidate(move) {
    if (![BUTTON.UP, BUTTON.DOWN].includes(move)) {
      throw ERROR.MOVE;
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    MissionUtils.Console.readLine(MESSAGE.INPUT_RETRY_OR_QUIT, (answer) => answer);
  },
};

module.exports = InputView;
