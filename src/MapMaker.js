const { WORD } = require("./Constants");

class MapMaker {
  #bridges;
  #movemetns;
  constructor() {
    this.#bridges;
    this.#movemetns;
    this.upMaps = [];
    this.downMaps = [];
  }

  makeMap(bridges, movements, isMoving) {
    this.#bridges = bridges;
    this.#movemetns = movements;
    if (isMoving) this.makeSuccesMap();
    else this.makeFailureMap();

    return {
      upMaps: this.upMaps.join(" | "),
      downMaps: this.downMaps.join(" | "),
    };
  }

  makeSuccesMap() {
    if (this.#bridges[this.#movemetns.length - 1] === WORD.UP) {
      this.upMaps.push(WORD.SUCCESS);
      this.downMaps.push(WORD.BLANK);
    } else {
      this.upMaps.push(WORD.BLANK);
      this.downMaps.push(WORD.SUCCESS);
    }
  }

  makeFailureMap() {
    if (this.#bridges[this.#movemetns.length - 1] === WORD.UP) {
      this.upMaps.push(WORD.FAILURE);
      this.downMaps.push(WORD.BLANK);
    } else {
      this.upMaps.push(WORD.BLANK);
      this.downMaps.push(WORD.FAILURE);
    }
  }

  makeResultMap() {}
}

module.exports = MapMaker;
