const { ERROR, BRIDGE } = require('../constants/Constants');

const movingValidation = (moving) => {
  if (moving !== BRIDGE.up && moving !== BRIDGE.down)
    throw new Error(`${ERROR.prefix} ${ERROR.moving}`);
};

module.exports = { movingValidation };
