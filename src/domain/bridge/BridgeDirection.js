const BridgeRandomNumberGenerator = require('../../BridgeRandomNumberGenerator');
const BridgeRandomNumberException = require('../../exception/BridgeRandomNumberException');

class BridgeDirection {
  static #DIRECTION = Object.freeze({
    [BridgeRandomNumberGenerator.RANDOM_LOWER_INCLUSIVE]: 'D',
    [BridgeRandomNumberGenerator.RANDOM_UPPER_INCLUSIVE]: 'U',
  });

  static validate(direction) {
    const { values } = Object;
    if (!values(BridgeDirection.#DIRECTION).includes(direction)) {
      throw new Error('[ERROR] 방향이 "D" 또는 "U" 가 아닙니다.');
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
