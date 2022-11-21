const ERROR_MESSAGE = require('../error/ErrorMessage')

const isNumber = (number) => {
  const regex = /^(?:[3-9]|1[0-9]|2[0])$/

  if (!regex.test(number)) {
    throw new Error(ERROR_MESSAGE.RANGE_ERROR)
  }

  return number
}

const isUpDown = (string) => {
  const regex = /^(?:[U]|[D])$/

  if (!regex.test(string)) {
    throw new Error(ERROR_MESSAGE.INPUT_MOVE_ERROR)
  }

  return string
}

module.exports = { isNumber, isUpDown }
