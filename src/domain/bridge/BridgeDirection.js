const BridgeRandomNumberGenerator = require('../../BridgeRandomNumberGenerator');
const BridgeDirectionException = require('../../exception/BridgeDirectionException');
const BridgeRandomNumberException = require('../../exception/BridgeRandomNumberException');

class BridgeDirection {
  static #DIRECTION = Object.freeze({
    [BridgeRandomNumberGenerator.RANDOM_LOWER_INCLUSIVE]: 'D',
    [BridgeRandomNumberGenerator.RANDOM_UPPER_INCLUSIVE]: 'U',
  });

  static validate(direction) {
    const { values } = Object;
    const directions = values(BridgeDirection.#DIRECTION);
    if (!directions.includes(direction)) {
      throw new BridgeDirectionException(directions);
    }
  }

  static validateRandomNumber(number) {
    if (number < BridgeRandomNumberGenerator.RANDOM_LOWER_INCLUSIVE) {
      throw new BridgeRandomNumberException();
    }
    if (number > BridgeRandomNumberGenerator.RANDOM_UPPER_INCLUSIVE) {
      throw new BridgeRandomNumberException();
    }
  }

  static generate(generateRandomNumber) {
    const number = generateRandomNumber();
    BridgeDirection.validateRandomNumber(number);
    return BridgeDirection.#DIRECTION[number];
  }

  static includes(direction) {
    const { values } = Object;
    return values(BridgeDirection.#DIRECTION).includes(direction);
  }
}

module.exports = BridgeDirection;
