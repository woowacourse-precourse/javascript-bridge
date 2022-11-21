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
        .map((_, index) => [index, new Stage()]),
    );
  }

  validate() {}

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
}

module.exports = Map;
