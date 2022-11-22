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

  updatePath(direction, markOX) {
    if (direction === CONDITION.UP) {
      this.#addPath(markOX, MARK.BLANK);
      return;
    }

    this.#addPath(MARK.BLANK, markOX);
  }

  #addPath(upsideMark, downsideMark) {
    this.#path.upside.push(upsideMark);
    this.#path.downside.push(downsideMark);
    this.#currentLocation += 1;
  }

  resetPath() {
    this.#path = { upside: [], downside: [] };
    this.#currentLocation = 0;
  }
}

module.exports = Player;
