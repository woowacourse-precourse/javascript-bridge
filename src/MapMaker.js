const { WORD } = require("./Constants");

class MapMaker {
  #bridges;
  #movements;
  constructor() {
    this.#bridges;
    this.#movements;
    this.upMaps = [];
    this.downMaps = [];
  }

  resetMap() {
    this.upMaps = [];
    this.downMaps = [];
  }

  makeMap(bridges, movements, isMoving) {
    this.#bridges = bridges;
    this.#movements = movements;
    if (isMoving) this.makeSuccesMap();
    else this.makeFailureMap();

    return {
      upMaps: this.upMaps.join(" | "),
      downMaps: this.downMaps.join(" | "),
    };
  }

  makeSuccesMap() {
    if (this.#bridges[this.#movements.length - 1] === WORD.UP) {
      this.upMaps.push(WORD.SUCCESS);
      this.downMaps.push(WORD.BLANK);
    } else {
      this.upMaps.push(WORD.BLANK);
      this.downMaps.push(WORD.SUCCESS);
    }
  }

  makeFailureMap() {
    if (this.#bridges[this.#movements.length - 1] === WORD.UP) {
      this.upMaps.push(WORD.BLANK);
      this.downMaps.push(WORD.FAILURE);
    } else {
      this.upMaps.push(WORD.FAILURE);
      this.downMaps.push(WORD.BLANK);
    }
  }

  getResultMap() {
    return {
      upMaps: this.upMaps.join(" | "),
      downMaps: this.downMaps.join(" | "),
    };
  }
}

module.exports = MapMaker;
