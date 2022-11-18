const { deepFreeze } = require('./helper');

const BRIDGE_CONSTANTS = deepFreeze({
  minimum: 3,
  maximum: 20,
});

module.exports = {
  BRIDGE_CONSTANTS,
};
