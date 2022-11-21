const POSITION = Object.freeze({
  UP: 'U',
  DOWN: 'D',
});

const GAME_STATUS = Object.freeze({
  WAITING: 'WAITING',
  PLAYING: 'PLAYING',
  FAILED: 'FAILED',
  SUCCEEDED: 'SUCCEEDED',
});

const FINAL_COMMAND_GROUP = Object.freeze({
  RETRY: 'R',
  QUIT: 'Q',
});

const MAP_MARK = Object.freeze({
  CORRECT: 'O',
  WRONG: 'X',
});

module.exports = {
  POSITION,
  GAME_STATUS,
  FINAL_COMMAND_GROUP,
  MAP_MARK,
};
