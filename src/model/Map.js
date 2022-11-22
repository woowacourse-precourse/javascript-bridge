/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const Stage = require('./Stage');
const { MOVE_COMMAND_UP, MOVE_COMMAND_DOWN, INDEX_OFFSET_MAP_AND_MOVING_COMMANDS } = require('../Constant');

class Map {
  #map;

  constructor(stageCount) {
    this.validate();
    this.#map = Object.fromEntries(
      Array(stageCount)
        .fill()
        .map((_, index) => [index + INDEX_OFFSET_MAP_AND_MOVING_COMMANDS, new Stage()]),
    );
  }

  validate() {}

  setMap(canMovingCommands) {
    const isCommandUp = (key) => canMovingCommands[key - INDEX_OFFSET_MAP_AND_MOVING_COMMANDS] === MOVE_COMMAND_UP;
    const isCommandDown = (key) => canMovingCommands[key - INDEX_OFFSET_MAP_AND_MOVING_COMMANDS] === MOVE_COMMAND_DOWN;
    Object.entries(this.#map).forEach(([key, stage]) => {
      if (isCommandUp(key)) stage.setMovingUpStage();
      if (isCommandDown(key)) stage.setMovingDownStage();
    });
  }

  getMap() {
    return this.#map;
  }

  getMapLength() {
    return Object.keys(this.#map).length;
  }

  getUpMap() {
    return Object.entries(this.#map).map(([index, stage]) => stage.getUpStage());
  }

  getDownMap() {
    return Object.entries(this.#map).map(([index, stage]) => stage.getDownStage());
  }
}

module.exports = Map;
