const Constants = require('./Constants');

const Validate = {
  bridge(num) {
    if (!Number(num)) throw new Error(Constants.Error.NUMBER);
    if (Number(num) < 3 || Number(num) > 20) throw new Error(Constants.Error.BRIDGE);
  },
  upOrDown(movement) {
    if (movement !== 'U' && movement !== 'D') throw new Error(Constants.Error.UP_OR_DOWN);
  },
  gameCommand(command) {
    if (command !== 'R' && command !== 'Q') throw new Error(Constants.Error.GAME_COMMAND);
  },
};

module.exports = Validate;
