const {
  ERR_MSG_BRIDGE_SIZE_NUM,
  ERR_MSG_BRIDGE_SIZE_INT,
  ERR_MSG_BRIDGE_SIZE_NATURAL_NUM,
  ERR_MSG_BRIDGE_SIZE_RANGE,
  ERR_MSG_DIRECTION,
  ERR_MSG_FINAL_GAME,
} = require("./Constant");
const Error = require("./Error");

const Checker = {
  bridgeSize(sizeStr) {
    if (isNaN(sizeStr)) Error.throw(ERR_MSG_BRIDGE_SIZE_NUM);
    const size = Number(sizeStr);
    if (!Number.isInteger(size)) Error.throw(ERR_MSG_BRIDGE_SIZE_INT);
    if (size < 0) Error.throw(ERR_MSG_BRIDGE_SIZE_NATURAL_NUM);
    if (size < 3 || size > 20) {
      Error.throw(ERR_MSG_BRIDGE_SIZE_RANGE);
    }
  },

  select(input) {
    const directionSet = new Set(["U", "D"]);
    if (directionSet.has(input)) return;
    Error.throw(ERR_MSG_DIRECTION);
  },

  finalGame(input) {
    const commandSet = new Set(["R", "Q"]);
    if (commandSet.has(input)) return;
    Error.throw(ERR_MSG_FINAL_GAME);
  },
};

module.exports = Checker;
