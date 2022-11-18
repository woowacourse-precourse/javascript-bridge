const BridgeRandomNumberGenerator = require('../../BridgeRandomNumberGenerator');

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
      throw new Error('[ERROR] 랜덤 숫자가 범위에 포함되지 않습니다.');
    }
    if (number > BridgeRandomNumberGenerator.RANDOM_UPPER_INCLUSIVE) {
      throw new Error('[ERROR] 랜덤 숫자가 범위에 포함되지 않습니다.');
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
