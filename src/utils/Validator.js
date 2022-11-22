const {
  NUMBER, ERROR, DIRECTION, GAME_COMMAND,
} = require('../data/constants');
const IO = require('./IO');

class Validator {
  static validateBridgeLength(length) {
    // eslint-disable-next-line no-undef
    if (!Number(length)) throw ERROR.BRIDGE_SIZE;
    if (Validator.isExceedRange(length, NUMBER.MIN_BRIDGE_SIZE, NUMBER.MAX_BRIDGE_SIZE)
    ) throw ERROR.BRIDGE_SIZE;
  }

  static validateBridgeDirection(direction) {
    if (direction === DIRECTION.UP || direction === DIRECTION.DOWN) return;
    throw ERROR.BRIDGE_DIRECTION;
  }

  static validateGameCommand(command) {
    if (command === GAME_COMMAND.RETRY || command === GAME_COMMAND.QUIT) return;
    throw ERROR.RETRY_COMMAND;
  }

  static isExceedRange(value, from, to) {
    if (value < from || value > to) return true;
    return false;
  }

  static handleException(validateFunction, innerFunction, errorFunction) {
    try {
      validateFunction();
      innerFunction();
    } catch (error) {
      Validator.handleError(error, errorFunction);
    }
  }

  static handleError(error, callback) {
    IO.output(error);
    callback();
  }
}
module.exports = Validator;
