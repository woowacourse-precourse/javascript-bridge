const COMMAND = Object.freeze({
  RETRY: 'R',
  QUIT: 'Q',
});

const DIRECTION = Object.freeze({
  0: 'D',
  1: 'U',
});

const PHASE = Object.freeze({
  START: 0,
  MOVE: 1,
  COMMAND: 2,
  RESULT: 3,
});

module.exports = {
  COMMAND,
  DIRECTION,
  PHASE,
};
