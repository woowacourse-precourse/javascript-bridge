const MAP_CHARACTERS = {
  START: '[ ',
  MIDDLE: ' | ',
  END: ' ]',
  WHITE_SPACE: ' ',
  USER_MOVE_RESULT: {
    true: 'O',
    false: 'X',
  },
  COMMAND: {
    U: 0,
    D: 1,
  },
};

module.exports = { MAP_CHARACTERS };
