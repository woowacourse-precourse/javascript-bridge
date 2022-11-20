const BridgeStatus = require('./BridgeStatus');
const { GAME_COMMAND } = require('../../lib/constans');

class Bridge {
  #array;
  #step;
  #status;

  constructor(array) {
    this.#array = array;
    this.#step = 0;
    this.#status = new BridgeStatus();
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

  #reset() {
    this.#status = new BridgeStatus();
    this.#step = 0;
  }

  reStart(command) {
    if (command === GAME_COMMAND.quit) {
      return false;
    }

    this.#reset();
    return true;
  }

  cross(moving) {
    const isMatch = this.#checkForMatch(moving, this.#array, this.#step);
    const position = this.#convertCommandToDirection(moving);
    this.#reflect(isMatch, position);

    return {
      result: isMatch,
      status: this.#status.getStatus()
    };
  }
}

module.exports = Bridge;
