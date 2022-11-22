const { validate, validateTile } = require('../validators');

/**
 * 플레이어가 이동한 흔적을 나타내는 클래스입니다.
 * 어떤 타일로 이동했는지, 살아남았는지 여부를 알 수 있습니다.
 */
class Moving {
  /** @type {string} */
  #tile;

  /** @type {boolean} */
  #survived;

  /**
   * @param {string} tile
   * @param {boolean} survived
   */
  constructor(tile, survived) {
    this.#tile = validateTile(tile).get();
    this.#survived = validate(survived).shouldBoolean().get();
  }

  /**
   * @returns {string}
   */
  getTile() {
    return this.#tile;
  }

  /**
   * @returns {boolean}
   */
  isSurvived() {
    return this.#survived;
  }
}

module.exports = Moving;
