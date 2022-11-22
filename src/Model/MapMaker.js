const { DIRECTION_KEY, MAP } = require("../constants/rule");

class MapMaker {
  static getMapResult(record) {
    const upMap = MapMaker.#makeMapResult(record, DIRECTION_KEY.UP);
    const downMap = MapMaker.#makeMapResult(record, DIRECTION_KEY.DOWN);

    return [upMap, downMap];
  }

  static #makeMapResult(record, directionKey) {
    const map = record
      .map(({ checkPass, direction }) => {
        const isSameDirection = direction === directionKey;
        if (checkPass && isSameDirection) return MAP.RIGHT;
        if (!checkPass && isSameDirection) return MAP.FAIL;
        return MAP.BLANK;
      })
      .join(MAP.LINE);
    return `${MAP.START} ${map} ${MAP.END}`;
  }
}

module.exports = MapMaker;
