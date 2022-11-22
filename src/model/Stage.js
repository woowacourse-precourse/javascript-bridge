/* eslint-disable class-methods-use-this */
class Stage {
  #stage;

  #movingCommand;

  constructor() {
    this.validate();
    this.#stage = { U: 'U', D: 'D' };
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
    this.setUpStage('O');
    this.setDownStage('X');
  }

  setMovingDownStage() {
    this.setUpStage('X');
    this.setDownStage('O');
  }

  getStage() {
    return this.#stage;
  }

  // updateByMoving(movingCommand) {
  //   if (movingCommand === 'U') {
  //     this.setDownStage(' ');
  //   }
  //   if (movingCommand === 'D') {
  //     this.setUpStage(' ');
  //   }
  // }

  setUpStage(canMoving) {
    this.#stage.U = canMoving;
  }

  getUpStage() {
    return this.#stage.U;
  }

  setDownStage(canMoving) {
    this.#stage.D = canMoving;
  }

  getDownStage() {
    return this.#stage.D;
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
