/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const Stage = require('./Stage');

class Map {
  #map;

  constructor(stageCount) {
    this.validate();
    this.#map = Object.fromEntries(
      Array(stageCount)
        .fill()
        .map((_, index) => [index + 1, new Stage()]),
    );
  }

  validate() {}

  setMap(canMovingCommands) {
    Object.entries(this.#map).forEach(([key, stage]) => {
      if (canMovingCommands[key - 1] === 'U') {
        stage.setUpStage('O');
        stage.setDownStage('X');
      }
      if (canMovingCommands[key - 1] === 'D') {
        stage.setUpStage('X');
        stage.setDownStage('O');
      }
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
