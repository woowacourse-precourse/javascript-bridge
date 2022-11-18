const { DOWNSIDE_SYMBOL, UPSIDE_SYMBOL } = require('./constants/condition.js');
const { ERROR_MSG } = require('./constants/message.js');

class Player {
  #directions = [];

  addDirection(direction) {
    this.validateDirection(direction);

    this.#directions.push(direction);
  }

  validateDirection(direction) {
    if (!direction) throw new Error(ERROR_MSG.emptyInput);

    if (!this.isValidDirectionSymbol(direction)) {
      throw new Error(ERROR_MSG.invalidDirection);
    }
  }

  isValidDirectionSymbol(direction) {
    return direction === DOWNSIDE_SYMBOL || direction === UPSIDE_SYMBOL;
  }
}

module.exports = Player;
