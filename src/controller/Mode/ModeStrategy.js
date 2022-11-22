const Bridge = require("../../model/Bridge");
const Position = require("../../model/Position");

/** @interface */
class ModeStrategy {
	/**
	 * @returns {number}
	 */
	getBridgeWidth() {}
	/**
	 * @param {string} positionSign
	 * @returns {Position} 
	 */
	createPosition(positionSign) {
	}
	/**
	 * @param {number} size
	 * @returns {Bridge} 
	 */
	createBridge(size) {}
}

module.exports = ModeStrategy;