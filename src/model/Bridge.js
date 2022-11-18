//@ts-check

const Position = require("./Position");
const Result = require("./Result");

class Bridge {
	/** @type {Array<Position>} */
	#savedPositions;
	/** @type {Array<Position>} */
	#movedPositions = [];

	/** @param {Array<Position>} savedPositions */
	constructor(savedPositions) {
		this.#savedPositions = savedPositions;
	}

	/** @param {Position} position */
	movePosition(position) {
		this.#movedPositions.push(position);
	}

	/** @returns {Result} */
	currentResult() {
		return new Result(this, this.#savedPositions, this.#movedPositions);
	}
}

module.exports = Bridge;