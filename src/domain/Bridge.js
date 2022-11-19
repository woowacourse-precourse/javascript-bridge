const { Random } = require("@woowacourse/mission-utils");
class Bridge {
  #length;
  #map;

  constructor(length, map) {
    this.#length = length;
    this.#map = map;
    console.log(this.#length);
  }
}

module.exports = Bridge;
