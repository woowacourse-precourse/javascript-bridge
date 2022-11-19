const CustomError = require('../CustomError');

const bridgeValidation = {
  isValidSize(birdgeSize) {
    if (isNaN(Number(birdgeSize))) throw new CustomError('다리 길이는 숫자여야 합니다.');
  },
};

module.exports = bridgeValidation;
