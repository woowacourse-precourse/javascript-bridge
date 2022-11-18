//@ts-check
const Bridge = require("./Bridge");
const Position = require("./Position");

class Result {
	/** @type {Bridge} */
	#bridge;
	/** @type {Array<Position>} */
	#savedPositions;
	/** @type {Array<Position>} */
	#movedPositions;
	
	/**
	 * @param {Bridge} bridge 
	 * @param {Array<Position>} savedPositions 
	 * @param {Array<Position>} movedPositions 
	 */
	constructor(bridge, savedPositions, movedPositions) {
		this.#bridge = bridge;
		this.#savedPositions = savedPositions;
		this.#movedPositions = movedPositions;
	}

	/** @returns {boolean} */
	#isFinal() {
		if (this.#savedPositions.length === this.#movedPositions.length)
			return true;
		return false;
	}

	/** @returns {boolean} */
	isCompelete() {
		if (this.#isFinal() && !this.isFailed())
			return true;
		return false;
	}

	/** @returns {boolean} */
	isFailed() {
		const index = this.#savedPositions.length - 1;
		const answerPosition = this.#savedPositions[index];
		const curPosition = this.#movedPositions[index];
		return !answerPosition.isSame(curPosition);
	}

	/** @returns {Array<Array<number>>} */
	stringify() {
		return this.#movedPositions.map((position, idx) => 
			[position.getIndex(), this.#savedPositions[idx].getIndex()]);
	}
}

module.exports = Result;