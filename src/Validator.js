const { DIRECTION, GAME_CMD } = require('./libs/constant');

const Validator = {
  validBridgeSize(size) {
    return size >= 3 && size <= 20;
  },
  validMovieDirection(direction) {
    const { up, down } = DIRECTION;

    return [up, down].includes(direction);
  },
  validGameCommand(cmd) {
    const { restart, quit } = GAME_CMD;

    return [restart, quit].includes(cmd);
  },
};

module.exports = Validator;
