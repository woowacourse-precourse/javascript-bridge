const { MOVING, MARKING } = require('./utils/constants');

class Path {
  #paths;
  #pathMap;

  constructor() {
    this.#paths = [];
    this.#pathMap = [[], []];
  }

  move(position, isMoveable) {
    this.#paths.push(position);

    this.#mark(isMoveable);

    return this.#pathMap;
  }

  #mark(isMoveable) {
    const currentPath = this.#getCurrentPath();
    const marking = isMoveable ? MARKING.RIGHT : MARKING.WRONG;

    currentPath === 'D' ? this.#markD(marking) : this.#markU(marking);

    return this.#pathMap;
  }

  getPathMap() {
    return this.#pathMap;
  }

  getPaths() {
    return this.#paths;
  }

  #getCurrentPath() {
    return this.#paths[this.#paths.length - 1];
  }

  #markU(marking) {
    const current = this.#paths.length - 1;

    this.#pathMap[MOVING.U][current] = marking;
    this.#pathMap[MOVING.D][current] = MARKING.EMPTY;
  }

  #markD(marking) {
    const current = this.#paths.length - 1;

    this.#pathMap[MOVING.U][current] = MARKING.EMPTY;
    this.#pathMap[MOVING.D][current] = marking;
  }
}

module.exports = Path;
