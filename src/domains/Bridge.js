const { validateTiles } = require('../validators');

/**
 * 하나의 다리를 나타내는 클래스입니다.
 * 다리는 타일로 구성되어있으며 각 타일의 위치 좌표는 0으로 시작합니다.
 */
class Bridge {
  /** @type {string[]} */
  #tiles;

  /**
   * @param {string[]} tiles
   */
  constructor(tiles) {
    this.#tiles = validateTiles(tiles).get();
  }

  /**
   * @returns {number}
   */
  getSize() {
    return this.#tiles.length;
  }

  /**
   * 특정 좌표에 있는 타일을 반환합니다.
   *
   * @param {number} position
   * @returns {string}
   */
  getTileAt(position) {
    return this.#tiles[position];
  }

  /**
   * @returns {string[]}
   */
  getTiles() {
    return this.#tiles;
  }
}

module.exports = Bridge;
