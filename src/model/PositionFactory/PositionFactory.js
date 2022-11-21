//@ts-check
const Position = require("../Position");

/** @abstract */
class PositionFactory {
	constructor() {}
	/** 
	 * @abstract
	 * @param {string} position
	 * @returns {number}
	*/
	convertToIndex(position) {
		return 0;
	}

	/** 
	 * @param {string} position
	 * @returns {Position}
	 */
	createPosition(position) {
		return new Position(this.convertToIndex(position));
	}
}

module.exports = PositionFactory;