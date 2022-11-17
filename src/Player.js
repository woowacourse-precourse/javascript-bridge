class Player {
  #curPlace;
  #numberOfAttempts;
  #success;

  constructor() {
    this.initCurPlace();
    this.#numberOfAttempts = 1;
    this.#success = false;
  }

  initCurPlace() {
    this.#curPlace = 0;
  }

  getCurPlace() {
    return this.#curPlace;
  }

  setCurPlace(place) {
    this.#curPlace = place;
  }

  getSuccess() {
    return this.#success;
  }

  getNumberOfAttempts() {
    return this.#numberOfAttempts;
  }

  setSuccess() {
    this.#success = true;
  }

  setNumberOfAttempts() {}
}

module.exports = Player;
