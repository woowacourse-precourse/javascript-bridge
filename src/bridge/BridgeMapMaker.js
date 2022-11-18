const Directions = require("../utils/Directions");
const BridgeGame = require("./BridgeGame");

const BridgeMapMaker = {
  map: [[], []],
  up: 0,
  down: 1,
  makeMap(direction, isPlaceToPass, distance) {
    for (let i = 0; i < 2; i++) {
      const mapDirection = i % 2;
      if (mapDirection === this.up) {
        this.mapUpBlock(direction, isPlaceToPass, distance);
        continue;
      }
      this.mapDownBlock(direction, isPlaceToPass, distance);
    }

    return this.map;
  },

  mapUpBlock(direction, isPlaceToPass, distance) {
    const point = distance > 1 ? "|" : "[";

    this.map[this.up] = this.map[this.up].map((value) => {
      value = value.replace("]", "");
      return value;
    });

    if (direction === Directions.UP_DIRECTION) {
      this.map[this.up].push(`${point} ${isPlaceToPass} ]`);
      return;
    }
    this.map[this.up].push(`${point}   ]`);
  },

  mapDownBlock(direction, isPlaceToPass, distance) {
    const point = distance > 1 ? "|" : "[";

    this.map[this.down] = this.map[this.down].map((value) => {
      value = value.replace("]", "");
      return value;
    });

    if (direction === Directions.DOWN_DIRECTION) {
      this.map[this.down].push(`${point} ${isPlaceToPass} ]`);
      return;
    }
    this.map[this.down].push(`${point}   ]`);
  },
};

module.exports = BridgeMapMaker;
