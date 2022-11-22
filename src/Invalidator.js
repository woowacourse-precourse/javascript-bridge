const { BRIDGE } = require('./constants');
const Invalidator = {
  inValidString: (input) => Number.isNaN(input),

  inValidSize: (size) => size < BRIDGE.MIN_SIZE || size > BRIDGE.MAX_SIZE,

};

module.exports = Invalidator;
