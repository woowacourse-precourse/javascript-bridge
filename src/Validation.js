const { BRIDGE, ERROR, MOVING, COMMAND } = require('./Message');

const Validation = {
  validateSize(size) {
    const convertInp = Number(size);
    if (Number.isNaN(convertInp)) {
      throw new Error(ERROR.SIZE);
    } else if (convertInp < BRIDGE.MIN_SIZE || convertInp > BRIDGE.MAX_SIZE) {
      throw new Error(ERROR.SIZE);
    }
    return;
  },

};

module.exports = Validation;