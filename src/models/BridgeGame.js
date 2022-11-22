const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');
const {
  BRIDGE_SIZE,
  ERROR_MESSAGE,
  DIRECTION,
  COMMAND_OPTION,
} = require('../constants');

const Bridge = require('./Bridge');

class BridgeGame {
  #bridge;
  #map = [];
  #attempts = 1;

  makeBridge(size) {
    this.#validateSize(size);

    const directions = makeBridge(size, generate);
    this.#bridge = new Bridge(directions);
  }

  #validateSize(size) {
    const validations = {
      invalidType: this.#isNumber.bind(this),
      invalidRange: this.#isInRange.bind(this),
    };

    Object.entries(validations).forEach(([key, validateFunc]) => {
      this.#validate(size, validateFunc, ERROR_MESSAGE[key]);
    });
  }

  move(round, direction) {
    this.#validateDirection(direction);

    const movingState = this.#bridge.isMovable(round, direction);
    this.#map.push([direction, movingState]);

    return { map: this.#map, movingState };
  }

  #validateDirection(direction) {
    this.#validate(
      direction,
      this.#isValidDirection,
      ERROR_MESSAGE.invalidDirection,
    );
  }

  isLastRound(round) {
    return round === this.#bridge.size();
  }

  retry(command) {
    this.#validateCommand(command);

    if (command === COMMAND_OPTION.quit) {
      return false;
    }

    this.#reset();

    return true;
  }

  #validateCommand(command) {
    this.#validate(command, this.#isValidCommand, ERROR_MESSAGE.invalidCommand);
  }

  #reset() {
    this.#map = [];
    this.#attempts += 1;
  }

  getGameResult() {
    const isSuccess = this.#bridge.size() === this.#map.length;

    return { map: this.#map, attempts: this.#attempts, isSuccess };
  }

  #isValidDirection(direction) {
    return direction === DIRECTION.up || direction === DIRECTION.down;
  }

  #isValidCommand(command) {
    return command === COMMAND_OPTION.retry || command === COMMAND_OPTION.quit;
  }

  #validate(value, validateFunc, errorMessage) {
    if (!validateFunc(value)) {
      throw new Error(errorMessage);
    }
  }

  #isNumber(value) {
    return typeof value === 'number';
  }

  #isInRange(number) {
    return number >= BRIDGE_SIZE.min && number <= BRIDGE_SIZE.max;
  }
}

module.exports = BridgeGame;
