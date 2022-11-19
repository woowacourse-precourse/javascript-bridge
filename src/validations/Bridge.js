const CustomError = require('../CustomError');

const BridgeValidation = {
  isValidSize(birdgeSize) {
    if (isNaN(birdgeSize)) throw new CustomError('다리 길이는 숫자여야 합니다.');
    if (birdgeSize < 3 || birdgeSize > 20) throw new CustomError('다리 길이는 3이상 20이하여야 합니다.');
  },
};

module.exports = BridgeValidation;
