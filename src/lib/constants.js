const status = {
  START: 0,
  READ_SIZE: 1,
  READ_MOVE: 2,
  READ_COMMAND: 3,
  FINISHED: 4,
}

const step = {
  0: 'D', // Down
  1: 'U', // Up
}

const option = {
  R: 0, // Restart
  Q: 1, // Quit
}

module.exports = {
  status,
  step,
  option,
}
