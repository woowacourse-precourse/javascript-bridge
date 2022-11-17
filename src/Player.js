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

  increaseCurPlace() {
    this.#curPlace += 1;
  }

  setSuccess() {
    this.#success = true;
  }

  increaseNumberOfAttempts() {
    this.#numberOfAttempts += 1;
  }

  getCurPlace() {
    return this.#curPlace;
  }

  getSuccess() {
    return this.#success;
  }

  getNumberOfAttempts() {
    return this.#numberOfAttempts;
  }
}

module.exports = Player;
