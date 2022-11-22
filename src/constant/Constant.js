const COMMAND = Object.freeze({
  RETRY: 'R',
  QUIT: 'Q',
});

const COMMANDS = Object.values(COMMAND);

const DIRECTION = Object.freeze({
  0: 'D',
  1: 'U',
});

const DIRECTIONS = Object.values(DIRECTION);

const PHASE = Object.freeze({
  START: 0,
  MOVE: 1,
  COMMAND: 2,
  RESULT: 3,
});

module.exports = {
  COMMAND,
  COMMANDS,
  DIRECTION,
  DIRECTIONS,
  PHASE,
};
