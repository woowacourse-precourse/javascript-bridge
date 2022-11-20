const Bridge = require('../entities/Bridge');

const BridgeMaker  = require('../../BridgeMaker');
const { generate }  = require('../../BridgeRandomNumberGenerator');

const BridgeError = require('../../error/BridgeError');
const ERROR_MESSAGE = require('../../error/error.constants');

class BridgeInteractor {
  #bridge;

  constructor() {
    this.#bridge = null;
  }

  makeBridge(size) {
    if (!this.validate(size)) throw new BridgeError(ERROR_MESSAGE.INVALID_BRIGE_SIZE);

    this.#bridge = new Bridge(BridgeMaker.makeBridge(size, generate));
    return this.#bridge;
  }

  /**
   * return the spaces of the bridge from start to location
   * @param {number} location
   * @returns {Array<"U" | "D">} spaces
   * @returns
   */
  getBridge(location) {
    // TODO: location validation: location can not be over the size of the bridge
    const bridge = this.#bridge.getBridge(location);
    return bridge;
  }

  /**
   * return the space at the location
   * @param {number} location
   * @returns {"U" | "D"} space
   */
  getSpace(location) {
    const space = this.#bridge.getSpace(location);
    return space;
  }

  getSize() {
    return this.#bridge.getSize();
  }

  validate(size) {
    // if not number return true
    if (/[^0-9]/.test(size)) return false;
    if (size < 3) return false;
    if (size > 20) return false;

    return true;
  }
}

module.exports = BridgeInteractor;
