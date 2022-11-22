const Constants = require('./Constants');

const Validate = {
  isNumber(num) {
    if (!Number(num)) throw new Error(Constants.Error.NUMBER);
  },
  bridgeSize(size) {
    if (Number(size) < 3 || Number(size) > 20) throw new Error(Constants.Error.BRIDGE);
  },
  upOrDown(movement) {
    if (movement !== 'U' && movement !== 'D') throw new Error(Constants.Error.UP_OR_DOWN);
  },
  gameCommand(command) {
    if (command !== 'R' && command !== 'Q') throw new Error(Constants.Error.GAME_COMMAND);
  },
};

module.exports = Validate;
