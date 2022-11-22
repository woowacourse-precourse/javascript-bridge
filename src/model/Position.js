//@ts-check

class Position {
	/** @type {number} */
	#index;
	
	/** @param {number} index*/
	constructor(index) {
		this.#index = index;
	}

	static createPosition(dictionary, sign) {
		if (!dictionary.hasOwnProperty(sign))
			throw new Error("[ERROR] 지정된 커맨드를 입력해주세요.");
		return new Position(dictionary[sign]);
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