const Constants = require('./Constants');

const Validate = {
  bridge(num) {
    if (!Number(num)) throw new Error(Constants.Error.number);
    if (Number(num) < 3 || Number(num) > 20) throw new Error(Constants.Error.bridge);
  },
  upOrDown(movement) {
    if (movement !== 'U' || movement !== 'D') throw new Error(Constants.Error.upOrDown);
  },
  gameCommand(command) {
    if (command !== 'R' || command !== 'Q') throw new Error(Constants.Error.gameCommand);
  },
};

module.exports = Validate;
