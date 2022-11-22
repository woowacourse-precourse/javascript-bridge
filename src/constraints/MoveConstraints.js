const { COMMAND, ERROR } = require('../constant/Constants');

class MoveConstraints {
	#moving;

	constructor(moving) {
		this.#moving = moving;
	}

	checkInputUorD() {
		if (
			this.#moving !== COMMAND.UPPER_BRIDGE_STRING &&
			this.#moving !== COMMAND.LOWER_BRIDGE_STRING
		) {
			throw ERROR.ERROR_NOT_ONLY_U_OR_D;
		}
	}
}

module.exports = MoveConstraints;
