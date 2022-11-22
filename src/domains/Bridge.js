const { GAME_COMMAND } = require('../../lib/constans');

class Bridge {
  #array;
  #status;
  #step;
  #attempts;

  constructor(array, status) {
    this.#array = array;
    this.#status = status;
    this.#step = 0;
    this.#attempts = 1;
  }

  getArray() {
    return this.#array;
  }

  #convertCommandToDirection(moving) {
    const map = {
      [GAME_COMMAND.down]: 0,
      [GAME_COMMAND.up]: 1
    };

    return map[moving];
  }

  #checkForMatch(moving, array, step) {
    return moving === array[step];
  }

  #reflect(isMatch, position) {
    this.#status.add(isMatch, position, this.#step);
    this.#increaseStep(isMatch);
  }

  #increaseStep(isMatch) {
    if (isMatch) {
      this.#step += 1;
    }
  }

  #reset(isRetry) {
    if (!isRetry) return;

    this.#status.init();
    this.#attempts += 1;
    this.#step = 0;
  }

  reStart(command) {
    const isRetry = command === GAME_COMMAND.retry;
    this.#reset(isRetry);

    return {
      isRetry,
      attempts: this.#attempts,
      status: this.#status.getStatus()
    };
  }

  #getData(moving) {
    const isMatch = this.#checkForMatch(moving, this.#array, this.#step);
    const position = this.#convertCommandToDirection(moving);

    return [isMatch, position];
  }

  cross(moving) {
    const [isMatch, position] = this.#getData(moving);
    this.#reflect(isMatch, position);

    return {
      isMatch,
      attempts: this.#attempts,
      status: this.#status.getStatus(),
      finish: this.#array.length === this.#step
    };
  }
}

module.exports = Bridge;
