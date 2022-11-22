const { BRIDGE, SIDE } = require('./Message');

function checkInteger(value) {
  if (value % 1 === 0) {
    return true;
  }
  return false;
}

function checkRange(value) {
  if (value >= BRIDGE.MIN_LENGTH && value <= BRIDGE.MAX_LENGTH) {
    return true;
  }
  return false;
}

function checkSide(value) {
  if (value === SIDE.DOWN_STR || value === SIDE.UP_STR) {
    return true;
  }
  return false;
}

module.exports = { checkInteger, checkRange, checkSide };
