const { SIZE, DIRECTION, INPUT } = require("./constants");
const { ERROR_MESSAGES } = require("./messages");
const { WRONG_BRIDGE_SIZE, WRONG_MOVEMENT, WRONG_WHETHER_TO_RETRY } =
  ERROR_MESSAGES;

const validator = {
  bridgeSize(size) {
    const { MIN, MAX } = SIZE;

    if (
      typeof +size !== "number" ||
      Number.isNaN(+size) ||
      +size < MIN ||
      +size > MAX
    )
      throw new Error(WRONG_BRIDGE_SIZE);
  },

  moving(movement) {
    const { UP, DOWN } = DIRECTION;

    if (movement !== UP && movement !== DOWN) throw new Error(WRONG_MOVEMENT);
  },

  retry(whetherToRetry) {
    const { RETRY, END } = INPUT;

    if (whetherToRetry !== RETRY && whetherToRetry !== END)
      throw new Error(WRONG_WHETHER_TO_RETRY);
  },
};

module.exports = validator;
