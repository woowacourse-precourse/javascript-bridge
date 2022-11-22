/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const Stage = require('./Stage');

class Map {
  #map;

  constructor(stageCount) {
    this.validate();
    // console.log(`in map ${stageCount}`);
    this.#map = Object.fromEntries(
      Array(stageCount)
        .fill()
        .map((_, index) => [index + 1, new Stage()]),
    );
  }

  validate() {}

  setRecoverMap(UpMap) {
    Object.entries(this.#map).forEach(([index, stage]) => {
      const number = UpMap[index - 1] === 'O' ? 1 : 0;
      stage.setStage(number);
    });
  }

  setMap(generateRandomNumberCallback) {
    const generateRandomNumber = Object.create(generateRandomNumberCallback);
    Object.entries(this.#map).forEach(([index, stage]) => {
      const randomNumber = generateRandomNumber.generate();
      stage.setStage(randomNumber);
    });
  }

  getMap() {
    return this.#map;
  }

  getUpMap() {
    return Object.entries(this.#map).map(([index, stage]) => stage.getUpStage());
  }

  getDownMap() {
    return Object.entries(this.#map).map(([index, stage]) => stage.getDownStage());
  }
}

module.exports = Map;
