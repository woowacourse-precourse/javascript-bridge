const { DIRECTION } = require('./libs/constant');

const Validator = {
  validBridgeSize(size) {
    return size >= 3 && size <= 20;
  },
  validMovieDirection(direction) {
    const { up, down } = DIRECTION;

    return [up, down].includes(direction);
  },
};

module.exports = Validator;
