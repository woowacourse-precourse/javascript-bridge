const { ERROR_MSG } = require('./constants/message.js');

class Player {
  #directions = [];

  addDirection(direction) {
    this.validateDirection(direction);

    this.#directions.push(direction);
  }

  validateDirection(direction) {
    if (!direction) throw new Error(ERROR_MSG.emptyInput);
  }
}

module.exports = Player;
