const CONSTANT = require('../constants/constant');
const MESSAGE = require('../constants/message');

const isNumber = (number) => CONSTANT.REGEX.NUMBER.test(number);

const isInRange = (size) =>
  size < CONSTANT.GAME.MIN_SIZE || size > CONSTANT.GAME.MAX_SIZE;

const checkValidSize = (size) => {
  if (!isNumber(size) || isInRange(size)) {
    throw new Error(MESSAGE.ERROR.SIZE);
  }
};

const checkValidDirection = (direction) => {
  if (!(direction === 'U' || direction === 'D')) {
    throw new Error(MESSAGE.ERROR.MOVE);
  }
};

const checkValidCommand = (command) => {
  if (!(command === 'R' || command === 'Q')) {
    throw new Error(MESSAGE.ERROR.RETRY);
  }
};

module.exports = { checkValidSize, checkValidDirection, checkValidCommand };
