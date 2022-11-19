class CurrentLocation {
  #currentLocation;

  constructor() {
    this.#currentLocation = -1;
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
}

module.exports = CurrentLocation;
