const CurrentStatus = class {
  #currentLocation;
  #isAlive;

  constructor() {
    this.#currentLocation = -1;
  }

  isAlive() {
    return this.#isAlive;
  }

  setIsAlive(status) {
    this.#isAlive = status;
  }

  getCurrentLocation() {
    return this.#currentLocation;
  }

  moveOneStep() {
    this.#currentLocation += 1;
  }

  resetCurrentLocation() {
    this.#currentLocation = -1;
  }
};

module.exports = CurrentStatus;
