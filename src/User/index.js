class User {
  #position;
  #round;

  constructor() {
    this.#position = 0;
    this.#round = 1;
  }

  setPositionPlus() {
    this.#position++;
  }

  resetPosition() {
    this.#position = 0;
  }

  setRoundPlus() {
    this.#round++;
  }

  get position() {
    return this.#position;
  }

  get round() {
    return this.#round;
  }
}

module.exports = User;
