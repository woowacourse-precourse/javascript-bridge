const {OPERATION_KEY, LIMIT} = require('./constants')

const validator = {
  isOverSize: (input) => !(Number(input) >= LIMIT.MIN_VALUE && Number(input) <= LIMIT.MAX_VALUE),
  isInteger: (input) => Number.isInteger(Number(input)),
  isNotUorD: (input) => !(input === OPERATION_KEY.UP || input === OPERATION_KEY.DOWN),
  isNotRorQ: (input) => !(input === OPERATION_KEY.RETRY || input === OPERATION_KEY.QUIT)
}

module.exports = validator;
