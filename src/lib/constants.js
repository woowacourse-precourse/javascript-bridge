const status = {
  OFF: 0,
  READ_SIZE: 1,
  READ_MOVEMENT: 2,
  READ_COMMAND: 3,
}

const step = {
  D: 0, // Down
  U: 1, // Up
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
