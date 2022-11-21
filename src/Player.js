class Player {
  #path;
  #currentLocation;

  constructor() {
    this.#path = { upside: [], downside: [] };
    this.#currentLocation = 0;
  }

  updatePath(direction, mark) {
    if (direction === 'U') {
      this.#path.upside.push(mark);
      this.#path.downside.push('   ');
    } else {
      this.#path.upside.push('   ');
      this.#path.downside.push(mark);
    }

    this.#currentLocation += 1;
  }
}

module.exports = Player;
