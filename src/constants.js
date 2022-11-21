const BRIDGE = Object.create({
  MOVING_UPPER: 'U',
  MOVING_LOWER: 'D',
  MIN_SIZE: 3,
  MAX_SIZE: 20,
});

const COMMAND = Object.create({
  RETRY: 'R',
  QUIT: 'Q',
});

module.exports = {
  BRIDGE,
  COMMAND,
};
