class Bridge {
  #spaces;
  /**
   *
   * @param {Array<'U'|'D'>} spaces
   */
  constructor(spaces) {
    this.#spaces = spaces;
  }

  /**
   * return the spaces of the bridge from start to location
   * @param {number} location
   * @returns
   */
  getBridge(location) {
    return [...this.#spaces].filter((space, index) => index <= location);
  }

  /**
   * return the space at the locatipon
   * @param {number} location
   * @returns
   */
  getSpace(location) {
    return this.#spaces[location];
  }

  getSize() {
    return this.#spaces.length - 1;
  }
}

module.exports = Bridge;
