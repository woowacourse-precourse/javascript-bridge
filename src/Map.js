const { MAP } = require('./constants');

class Map {
  #up;
  #down;

  constructor() {
    this.#up = `${MAP.BEGINNING_OF_THE_BRIDGE}`;
    this.#down = `${MAP.BEGINNING_OF_THE_BRIDGE}`;
  }

  printPreviousSteps(previousSteps, step) {
    for (let i = 0; i < step; ++i) {
      if (previousSteps.charAt(i) === 'U') this.printPreviousUp();
      else if (previousSteps.charAt(i) === 'D') this.printPreviousDown();
    }
  }

  printPreviousUp() {
    this.#up += `${MAP.MOVABLE}${MAP.DIVISION_OF_THE_BRIDGE}`;
    this.#down += `${MAP.UNSELECTED}${MAP.DIVISION_OF_THE_BRIDGE}`;
  }

  printPreviousDown() {
    this.#up += `${MAP.UNSELECTED}${MAP.DIVISION_OF_THE_BRIDGE}`;
    this.#down += `${MAP.MOVABLE}${MAP.DIVISION_OF_THE_BRIDGE}`;
  }

  printCurrentStep(currentStep, isMovable) {
    if (currentStep === 'U') this.printCurrentUp(isMovable);
    else if (currentStep === 'D') this.printCurrentDown(isMovable);
  }

  printCurrentUp(isMovable) {
    if (isMovable) {
      this.#up += `${MAP.MOVABLE}${MAP.END_OF_THE_BRIDGE}`;
      this.#down += `${MAP.UNSELECTED}${MAP.END_OF_THE_BRIDGE}`;
    } else {
      this.#up += `${MAP.UNSELECTED}${MAP.END_OF_THE_BRIDGE}`;
      this.#down += `${MAP.UNMOVABLE}${MAP.END_OF_THE_BRIDGE}`;
    }
  }

  printCurrentDown(isMovable) {
    if (isMovable) {
      this.#up += `${MAP.UNSELECTED}${MAP.END_OF_THE_BRIDGE}`;
      this.#down += `${MAP.MOVABLE}${MAP.END_OF_THE_BRIDGE}`;
    } else {
      this.#up += `${MAP.UNMOVABLE}${MAP.END_OF_THE_BRIDGE}`;
      this.#down += `${MAP.UNSELECTED}${MAP.END_OF_THE_BRIDGE}`;
    }
  }

  getMap() {
    return { up: this.#up, down: this.#down };
  }
}

module.exports = Map;
