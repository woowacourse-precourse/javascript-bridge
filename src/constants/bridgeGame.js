const GAME_COMMAND = Object.freeze({
  up: 'U',
  down: 'D',
  quit: 'Q',
  retry: 'R',
});

const BRIDGE_LENGTH = Object.freeze({
  minSize: 3,
  maxSize: 20,
});

const GAME_PATTERN = Object.freeze({
  verticalBar: '|',
  o: 'O',
  x: 'X',
});

module.exports = {
  GAME_COMMAND,
  BRIDGE_LENGTH,
  GAME_PATTERN,
};
