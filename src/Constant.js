const STATE = Object.freeze({
  START: 0,
  MOVE: 1,
  FAIL: 2,
  RETRY: 'R',
  QUIT: 'Q',
});

module.exports = {
  STATE,
};
