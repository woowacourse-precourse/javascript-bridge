const { ERROR } = require('../utils/constants');

class GamePiece {
  #positions = [];

  constructor(position) {
    this.#validatePosition(position);
    this.#positions.push(position);
  }

  #validatePosition(position) {
    if (position !== 'U' && position !== 'D') {
      throw new Error(ERROR.read_moving_error);
    }
  }
}

module.exports = GamePiece;
