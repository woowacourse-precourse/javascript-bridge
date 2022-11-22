const { ERROR_MESSAGE } = require("../model/component");
class CellError {
  #cell;
  constructor(cell) {
    this.validate(cell);
    this.#cell = cell;
  }

  validate(cell) {
    if (!(cell === "U" || cell === "D")) {
      throw new Error(ERROR_MESSAGE.CELL_ERROR_MESSAGE);
    }
  }
}

module.exports = CellError;
