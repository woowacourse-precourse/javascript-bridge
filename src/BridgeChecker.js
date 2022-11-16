const { VALUE } = require("./constant");

const BridgeChecker = {
  /**
   * @param {number} order
   * @param {string} userInput
   * @param {string[]} bridge
   * @return {{}}
   */
  check(order, userInput, bridge) {
    let up = " ",
      down = " ",
      isEnd = false;
    if (bridge[order] === userInput)
      userInput == VALUE.UP ? (up = VALUE.SIGN_O) : (down = VALUE.SIGN_O);
    if (bridge[order] !== userInput) {
      userInput == VALUE.UP ? (up = VALUE.SIGN_X) : (down = VALUE.SIGN_X);
      isEnd = true;
    }
    return { up, down, isEnd };
  },
};

module.exports = BridgeChecker;
