/* eslint-disable object-curly-newline */
/* eslint-disable class-methods-use-this */
const { MOVE_COMMAND_UP, MOVE_COMMAND_DOWN, SAFE_BRIDGE, DANGER_BRIDGE } = require('../Constant');

class Stage {
  #stage;

  #movingCommand;

  constructor() {
    this.validate();
    this.#stage = { U: '', D: '' };
    this.#movingCommand = '';
  }

  validate() {}

  setStage(randomNumber) {
    const canMovingUpStage = randomNumber === 1;
    const canMovingDownStage = randomNumber === 0;
    if (canMovingUpStage) {
      this.setMovingUpStage();
    }
    if (canMovingDownStage) {
      this.setMovingDownStage();
    }
  }

  setMovingUpStage() {
    this.setUpStage(SAFE_BRIDGE);
    this.setDownStage(DANGER_BRIDGE);
  }

  setMovingDownStage() {
    this.setUpStage(DANGER_BRIDGE);
    this.setDownStage(SAFE_BRIDGE);
  }

  getStage() {
    return this.#stage;
  }

  setUpStage(canMoving) {
    this.#stage[MOVE_COMMAND_UP] = canMoving;
  }

  getUpStage() {
    return this.#stage[MOVE_COMMAND_UP];
  }

  setDownStage(canMoving) {
    this.#stage[MOVE_COMMAND_DOWN] = canMoving;
  }

  getDownStage() {
    return this.#stage[MOVE_COMMAND_DOWN];
  }

  setMovingCommand(movingCommand) {
    this.#movingCommand = movingCommand;
  }

  resetMovingCommand() {
    this.#movingCommand = '';
  }

  getMovingCommand() {
    return this.#movingCommand;
  }
}

module.exports = Stage;
