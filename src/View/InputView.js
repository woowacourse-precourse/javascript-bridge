const { continueAfterCatchError } = require("../utils/Misc.js");
const { read } = require("../utils/Io.js");
const { INPUT } = require("../constants/index.js");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  readBridgeSize(callback) {
    const { READ_BRIDGE } = INPUT;
    read(READ_BRIDGE, (size) =>
      continueAfterCatchError(size, callback, this.readBridgeSize.bind(this))
    );
  },

  readMoving(callback) {
    const { MOVING_BRIDGE } = INPUT;
    read(MOVING_BRIDGE, (move) =>
      continueAfterCatchError(move, callback, this.readMoving.bind(this))
    );
  },

  readGameCommand(callback) {
    const { RETRY_BRIDGE } = INPUT;
    read(RETRY_BRIDGE, (move) =>
      continueAfterCatchError(move, callback, this.readGameCommand.bind(this))
    );
  },
};

module.exports = InputView;
