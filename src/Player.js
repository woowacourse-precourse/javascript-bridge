const { CONDITION, MARK } = require('./utils/constant');

class Player {
  #path;
  #currentLocation;

  constructor() {
    this.#path = { upside: [], downside: [] };
    this.#currentLocation = 0;
  }

  getPath() {
    return this.#path;
  }

  getCurrentLocation() {
    return this.#currentLocation;
  }

  updatePath(direction, mark) {
    if (direction === CONDITION.UP) {
      this.#path.upside.push(mark);
      this.#path.downside.push(MARK.BLANK);
    } else {
      this.#path.upside.push(MARK.BLANK);
      this.#path.downside.push(mark);
    }

    this.#currentLocation += 1;
  }

  resetPath() {
    this.#path = { upside: [], downside: [] };
    this.#currentLocation = 0;
  }
}

module.exports = Player;
