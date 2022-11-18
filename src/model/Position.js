//@ts-check

class Position {
	/** @type {number} */
	#index;
	
	/** @param {number} index*/
	constructor(index) {
		this.#index = index;
	}
	
	/** @returns {number} */
	getIndex() {
		return this.#index;
	}
	
	/** 
	 * @param {Position} position
	 * @returns {boolean}
	 */
	isSame(position) {
		return this.getIndex() === position.getIndex();
	}
}

module.exports = Position;
