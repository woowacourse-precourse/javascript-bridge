const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");
const InputError = require("../src/InputError");
const { ERROR } = require("../src/Constant/Constant");

const BridgeMaker = {
  canMakeBridge(size) {
    const isValidInput = size < 3 || size > 20 || size % 1 != 0;
    if (isValidInput) throw new InputError("3-20", ERROR.NOT_RANGE);
    return BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate);
  },

  makeBridge(size, generateRandomNumber) {
    return new Array(size).fill(undefined).map((e) => {
      const numbers = generateRandomNumber();
      return Number(numbers) == 1 ? "U" : "D";
    });
  },
};

module.exports = BridgeMaker;
