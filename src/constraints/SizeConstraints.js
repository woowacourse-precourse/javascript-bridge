const { CONSTRAINTS, ERROR } = require('../constant/Constants');

class SizeConstraints {
	#size;

	constructor(size) {
		this.#size = size;
	}

	checkOnlyNumber() {
		const regex = /^\d+$/;

		if (!regex.test(this.#size)) {
			throw ERROR.ERROR_NOT_ONLY_NUMBER;
		}
	}

	checkNumberRange() {
		const numberdSize = Number(this.#size);

		if (
			numberdSize < CONSTRAINTS.MINIMUM_SIZE_RANGE ||
			numberdSize > CONSTRAINTS.MAXIMUM_SIZE_RANGE
		) {
			throw ERROR.ERROR_NOT_IN_RANGE;
		}
	}

	checkStartZero() {
		if (this.#size[0] === CONSTRAINTS.START_STRING_OF_SIZE) {
			throw ERROR.ERROR_DONT_START_ZERO;
		}
	}
}

module.exports = SizeConstraints;
