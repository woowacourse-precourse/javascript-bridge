const CONSTANT = require('../constants/constant');
const MESSAGE = require('../constants/message');

const checkValidSize = (size) => {
  if (!isNumber(size) || isInRange(size)) {
    throw new Error(MESSAGE.ERROR.SIZE);
  }
};

const isNumber = (number) => CONSTANT.REGEX.NUMBER.test(number);

const isInRange = (size) =>
  size < CONSTANT.GAME.MIN_SIZE || size > CONSTANT.GAME.MAX_SIZE;

module.exports = { checkValidSize };
