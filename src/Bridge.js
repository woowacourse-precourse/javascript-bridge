class Bridge {
  #directions;
  #currentDirection;

  constructor(directions) {
    this.#directions = directions;
  } 

  isCurrentDirection(direction) {
    return this.#directions === direction;
  }
}

module.exports = Bridge;