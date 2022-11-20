const {
  DOWNSIDE_SYMBOL,
  UPSIDE_SYMBOL,
  QUIT_COMMAND,
  RESTART_COMMAND,
  BRIDGE_SIZE_MAX_RANGE,
  BRIDGE_SIZE_MIN_RANGE,
} = require('./constants/condition.js');
const { ERROR_MSG } = require('./constants/message.js');

class Validation {
  static validateDirection(direction) {
    const directionSymbols = [DOWNSIDE_SYMBOL, UPSIDE_SYMBOL];

    if (!directionSymbols.includes(direction)) {
      throw new Error(ERROR_MSG.invalidDirection);
    }
  }

  static validateGameCommand(gameCommand) {
    const commands = [QUIT_COMMAND, RESTART_COMMAND];

    if (!commands.includes(gameCommand)) {
      throw new Error(ERROR_MSG.inValidCommand);
    }
  }

  static validateSize(size) {
    if (!size) throw new Error(ERROR_MSG.emptyInput);

    if (!Validation.#hasOnlyNumber(size)) throw new Error(ERROR_MSG.invalidInputType);

    if (Validation.#isStartedZero(size)) throw new Error(ERROR_MSG.isStartedZero);

    if (!Validation.#isValideBridgeSizeRange(size)) throw new Error(ERROR_MSG.invalidInputRange);
  }

  static #hasOnlyNumber(size) {
    return size
      .split('')
      .map((eachLetter) => parseInt(eachLetter, 10))
      .every((number) => Number.isInteger(number));
  }

  static #isStartedZero(size) {
    return size.startsWith('0');
  }

  static #isValideBridgeSizeRange(size) {
    return BRIDGE_SIZE_MIN_RANGE <= size && size <= BRIDGE_SIZE_MAX_RANGE;
  }
}

module.exports = Validation;
