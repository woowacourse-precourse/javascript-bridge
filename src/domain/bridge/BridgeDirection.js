const BridgeRandomNumberGenerator = require('../../BridgeRandomNumberGenerator');

class BridgeDirection {
  static #DIRECTION = Object.freeze({
    [BridgeRandomNumberGenerator.RANDOM_LOWER_INCLUSIVE]: 'D',
    [BridgeRandomNumberGenerator.RANDOM_UPPER_INCLUSIVE]: 'U',
  });

  static validate(number) {
    if (number < BridgeRandomNumberGenerator.RANDOM_LOWER_INCLUSIVE) {
      throw new Error('[ERROR] 랜덤 숫자가 범위에 포함되지 않습니다.');
    }
    if (number > BridgeRandomNumberGenerator.RANDOM_UPPER_INCLUSIVE) {
      throw new Error('[ERROR] 랜덤 숫자가 범위에 포함되지 않습니다.');
    }
  }

  static generate(generateRandomNumber) {
    const number = generateRandomNumber();
    BridgeDirection.validate(number);
    return BridgeDirection.#DIRECTION[number];
  }
}

module.exports = BridgeDirection;
