const { BRIDGE_SIZE } = require('./constants');
const { MSG } = require('./messages');

const validator = {
  bridgeSize: (length) => {
    if (Number.isNaN(+length)) throw MSG.ERROR.BRIDGE_TYPE;
    if (+length < BRIDGE_SIZE.MIN || BRIDGE_SIZE.MAX < +length)
      throw MSG.ERROR.BRIDGE_RANGE;
  },
  direction: (direction) => {
    if (direction !== 'U' && direction !== 'D') throw MSG.ERROR.DIRECTION_TYPE;
  },
  command: (command) => {
    if (command !== 'R' && command !== 'Q') throw MSG.ERROR.COMMAND_TYPE;
  },
};

module.exports = {
  validator,
};
