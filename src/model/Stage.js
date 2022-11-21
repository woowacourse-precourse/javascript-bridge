/* eslint-disable class-methods-use-this */
class Stage {
  #stage;

  constructor() {
    this.validate();
    this.#stage = [0, 0];
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

  setUpStage(canMoving) {
    this.#stage[0] = canMoving;
  }

  getUpStage() {
    return this.#stage[0];
  }

  setDownStage(canMoving) {
    this.#stage[1] = canMoving;
  }

  getDownStage() {
    return this.#stage[1];
  }
}

module.exports = Stage;
