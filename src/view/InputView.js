const { continueAfterCatchError } = require("../utils/Misc.js");
const { read } = require("../utils/IO.js");
const {
  INPUT: { READ_BRIDGE, MOVING_BRIDGE, RETRY_BRIDGE },
} = require("../constants/index.js");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  readBridgeSize(callback) {
    read(READ_BRIDGE, (size) =>
      continueAfterCatchError(size, callback, this.readBridgeSize.bind(this))
    );
  },

  readMoving(callback) {
    read(MOVING_BRIDGE, (move) =>
      continueAfterCatchError(move, callback, this.readMoving.bind(this))
    );
  },

  readGameCommand(callback) {
    read(RETRY_BRIDGE, (move) =>
      continueAfterCatchError(move, callback, this.readGameCommand.bind(this))
    );
  },
};

module.exports = InputView;
