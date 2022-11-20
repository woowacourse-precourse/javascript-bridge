const COMMAND = require('../../constants/command');
const NUMBER = require('../../constants/number');
const STRING = require('../../constants/string');
const BridgeMaker = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');

class Bridge {
  static #size = NUMBER.ZERO;

  static #path = [];

  static #bridge = {};

  static getPath() {
    return this.#path;
  }

  static getBridge() {
    return this.#bridge;
  }

  static getPosition(countIndex) {
    return this.#path[countIndex];
  }

  static setSize(size) {
    this.#size = size;
  }

  static setMoveResult(direction, moveResult, countIndex) {
    this.#bridge[direction][countIndex] = moveResult;
  }

  static makePath() {
    this.#path = BridgeMaker.makeBridge(this.#size, generate);
  }

  static init() {
    COMMAND.DIRECTIONS.forEach((direction) => {
      this.#bridge[direction] = Array.from({ length: this.#size }).fill(
        STRING.SPACE
      );
    });
  }

  static makeValidForm(countIndex) {
    return COMMAND.DIRECTIONS.map((direction) => {
      const validBridgeForm = this.#bridge[direction]
        .slice(NUMBER.ZERO, countIndex)
        .join(STRING.VERTICAL_BAR);
      return `${STRING.LEFT_BAR} ${validBridgeForm} ${STRING.RIGHT_BAR}`;
    });
  }
}

module.exports = Bridge;
