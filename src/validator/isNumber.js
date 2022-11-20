const ERROR_MESSAGE = require('../error/ErrorMessage')

const isNumber = (number) => {
  const regex = /^(?:[3-9]|1[0-9]|2[0])$/

  if (!regex.test(number)) {
    throw new Error(ERROR_MESSAGE.RANGE_ERROR)
  }

  return number
}

module.exports = isNumber
